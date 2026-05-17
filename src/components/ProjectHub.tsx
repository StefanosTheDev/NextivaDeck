"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  FolderPlus,
  LayoutGrid,
  ArrowRight,
  Settings,
  Trash2,
  RotateCcw,
  Archive,
  X,
} from "lucide-react";
import type { ProjectsIndex, ProjectSummary } from "@/lib/projects/types";

type CreateState = "idle" | "creating" | "error";

export default function ProjectHub() {
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [defaultProjectId, setDefaultProjectId] = useState<string>("investor-deck");
  const [loading, setLoading] = useState(true);
  const [createName, setCreateName] = useState("");
  const [createState, setCreateState] = useState<CreateState>("idle");
  const [createError, setCreateError] = useState("");
  const [activeActionProjectId, setActiveActionProjectId] = useState<string | null>(null);
  const [bulkWorking, setBulkWorking] = useState(false);
  const [actionError, setActionError] = useState("");
  const [deletedModalOpen, setDeletedModalOpen] = useState(false);

  const busy = !!activeActionProjectId || bulkWorking;

  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) throw new Error("Failed to load projects");
        const data = (await response.json()) as ProjectsIndex;
        if (!alive) return;
        setProjects(Array.isArray(data.projects) ? data.projects : []);
        setDefaultProjectId(
          typeof data.defaultProjectId === "string" && data.defaultProjectId
            ? data.defaultProjectId
            : "investor-deck"
        );
      } catch {
        if (!alive) return;
        setProjects([]);
      } finally {
        if (alive) setLoading(false);
      }
    };

    void load();
    return () => {
      alive = false;
    };
  }, []);

  const activeProjects = useMemo(
    () =>
      projects
        .filter((project) => project.status !== "deleted")
        .sort((a, b) => {
          if (a.id === defaultProjectId) return -1;
          if (b.id === defaultProjectId) return 1;
          return a.name.localeCompare(b.name);
        }),
    [projects, defaultProjectId]
  );

  const deletedProjects = useMemo(
    () =>
      projects
        .filter((project) => project.status === "deleted")
        .sort((a, b) => {
          const aDeletedAt = a.deletedAt ? Date.parse(a.deletedAt) : 0;
          const bDeletedAt = b.deletedAt ? Date.parse(b.deletedAt) : 0;
          if (aDeletedAt !== bDeletedAt) return bDeletedAt - aDeletedAt;
          return a.name.localeCompare(b.name);
        }),
    [projects]
  );

  useEffect(() => {
    if (deletedModalOpen && deletedProjects.length === 0) {
      setDeletedModalOpen(false);
    }
  }, [deletedModalOpen, deletedProjects.length]);

  useEffect(() => {
    if (!deletedModalOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDeletedModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deletedModalOpen]);

  function replaceProject(nextProject: ProjectSummary) {
    setProjects((prev) =>
      prev.map((project) => (project.id === nextProject.id ? nextProject : project))
    );
  }

  async function handleCreateProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!createName.trim() || createState === "creating") return;

    setCreateState("creating");
    setCreateError("");

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: createName }),
      });

      if (!response.ok) {
        const errorBody = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(errorBody.error || "Unable to create project");
      }

      const created = (await response.json()) as ProjectSummary;
      setProjects((prev) => [...prev, created]);
      setCreateName("");
      setCreateState("idle");
      router.push(`/projects/${created.id}/catalog`);
    } catch (error) {
      setCreateState("error");
      setCreateError(error instanceof Error ? error.message : "Unable to create project");
    }
  }

  async function handleSoftDeleteProject(projectId: string) {
    if (projectId === defaultProjectId || busy) return;
    if (!window.confirm("Move this project to Recently Deleted? You can restore it later.")) {
      return;
    }

    setActionError("");
    setActiveActionProjectId(projectId);
    try {
      const response = await fetch(`/api/projects/${encodeURIComponent(projectId)}`, {
        method: "DELETE",
      });
      const body = (await response.json().catch(() => ({}))) as
        | ProjectSummary
        | { error?: string };
      if (!response.ok) {
        const errorMsg = "error" in body && body.error ? body.error : "Unable to delete project";
        throw new Error(errorMsg);
      }
      replaceProject(body as ProjectSummary);
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "Unable to delete project");
    } finally {
      setActiveActionProjectId(null);
    }
  }

  async function handleRestoreProject(projectId: string) {
    if (busy) return;

    setActionError("");
    setActiveActionProjectId(projectId);
    try {
      const response = await fetch(
        `/api/projects/${encodeURIComponent(projectId)}/restore`,
        { method: "POST" }
      );
      const body = (await response.json().catch(() => ({}))) as
        | ProjectSummary
        | { error?: string };
      if (!response.ok) {
        const errorMsg = "error" in body && body.error ? body.error : "Unable to restore project";
        throw new Error(errorMsg);
      }
      replaceProject(body as ProjectSummary);
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "Unable to restore project");
    } finally {
      setActiveActionProjectId(null);
    }
  }

  async function handleHardDeleteProject(projectId: string) {
    if (busy) return;
    if (
      !window.confirm(
        "Permanently delete this project? This removes its data file and cannot be undone."
      )
    ) {
      return;
    }

    setActionError("");
    setActiveActionProjectId(projectId);
    try {
      const response = await fetch("/api/projects/hard-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectIds: [projectId] }),
      });
      const body = (await response.json().catch(() => ({}))) as {
        removed?: string[];
        error?: string;
      };
      if (!response.ok) {
        throw new Error(body.error || "Unable to permanently delete project");
      }
      const removed = new Set(body.removed ?? [projectId]);
      setProjects((prev) => prev.filter((project) => !removed.has(project.id)));
    } catch (error) {
      setActionError(
        error instanceof Error ? error.message : "Unable to permanently delete project"
      );
    } finally {
      setActiveActionProjectId(null);
    }
  }

  async function handlePurgeAllDeleted() {
    if (deletedProjects.length === 0 || busy) return;
    if (
      !window.confirm(
        `Permanently delete all ${deletedProjects.length} project(s) in Recently Deleted? This cannot be undone.`
      )
    ) {
      return;
    }

    setBulkWorking(true);
    setActionError("");
    try {
      const response = await fetch("/api/projects/deleted", { method: "DELETE" });
      const body = (await response.json().catch(() => ({}))) as {
        removed?: string[];
        error?: string;
      };
      if (!response.ok) {
        throw new Error(body.error || "Unable to clear deleted projects");
      }
      const removed = new Set(body.removed ?? []);
      setProjects((prev) => prev.filter((project) => !removed.has(project.id)));
    } catch (error) {
      setActionError(
        error instanceof Error ? error.message : "Unable to clear deleted projects"
      );
    } finally {
      setBulkWorking(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0f1a 0%, #111827 100%)",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "56px 28px 72px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            marginBottom: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LayoutGrid size={20} color="#5b9cf5" />
            <span style={{ color: "#5b9cf5", fontSize: 14, letterSpacing: "0.04em" }}>
              Project Hub
            </span>
          </div>

          <button
            type="button"
            onClick={() => setDeletedModalOpen(true)}
            disabled={deletedProjects.length === 0}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color:
                deletedProjects.length === 0
                  ? "rgba(255,255,255,0.35)"
                  : "rgba(255,255,255,0.8)",
              fontSize: 13,
              padding: "6px 12px",
              cursor: deletedProjects.length === 0 ? "default" : "pointer",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <Archive size={14} />
            Recently Deleted
            {deletedProjects.length > 0 && (
              <span
                style={{
                  fontSize: 12,
                  background: "rgba(217,119,6,0.25)",
                  color: "#fbbf24",
                  borderRadius: 999,
                  padding: "1px 7px",
                  marginLeft: 2,
                }}
              >
                {deletedProjects.length}
              </span>
            )}
          </button>
        </div>

        <h1 style={{ fontSize: 36, lineHeight: 1.1, margin: 0 }}>
          Select a slide deck project
        </h1>
        <p style={{ margin: "12px 0 28px", color: "rgba(255,255,255,0.6)", maxWidth: 780 }}>
          Create and manage multiple deck projects. Each project has its own route, catalog
          ordering, categories, hidden slides, and export scope.
        </p>

        <form
          onSubmit={handleCreateProject}
          style={{
            display: "flex",
            gap: 10,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            padding: 12,
            marginBottom: 28,
          }}
        >
          <input
            value={createName}
            onChange={(event) => setCreateName(event.target.value)}
            placeholder="New project name (e.g. Q3 Board Deck)"
            style={{
              flex: 1,
              background: "rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8,
              color: "#fff",
              fontSize: 14,
              padding: "12px 14px",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={!createName.trim() || createState === "creating"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0 16px",
              borderRadius: 8,
              border: "none",
              background: createName.trim() ? "#2860B2" : "rgba(255,255,255,0.1)",
              color: createName.trim() ? "#fff" : "rgba(255,255,255,0.4)",
              cursor: createName.trim() ? "pointer" : "default",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <FolderPlus size={16} />
            {createState === "creating" ? "Creating..." : "Create Project"}
          </button>
        </form>

        {createState === "error" && (
          <p style={{ margin: "-18px 0 20px", color: "#f87171", fontSize: 13 }}>{createError}</p>
        )}
        {actionError && (
          <p style={{ margin: "-8px 0 20px", color: "#f87171", fontSize: 13 }}>{actionError}</p>
        )}

        {loading ? (
          <p style={{ color: "rgba(255,255,255,0.55)" }}>Loading projects...</p>
        ) : activeProjects.length === 0 ? (
          <div
            style={{
              border: "1px dashed rgba(255,255,255,0.25)",
              borderRadius: 12,
              padding: 24,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            No projects found yet. Create one to get started.
          </div>
        ) : (
          <section>
            <h2
              style={{
                margin: "0 0 12px",
                color: "rgba(255,255,255,0.75)",
                fontSize: 14,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Active Projects
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 14,
              }}
            >
              {activeProjects.map((project) => {
                const isDefault = project.id === defaultProjectId;
                const slideCount = project.slideCount ?? 0;
                return (
                  <article
                    key={project.id}
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.04)",
                      padding: 16,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      minHeight: 170,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          color: isDefault ? "#5b9cf5" : "rgba(255,255,255,0.45)",
                          background: isDefault ? "rgba(40,96,178,0.18)" : "rgba(255,255,255,0.08)",
                          borderRadius: 999,
                          padding: "4px 8px",
                        }}
                      >
                        {isDefault ? "Default project" : "Project"}
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
                        {project.id}
                      </span>
                    </div>

                    <h2 style={{ margin: 0, fontSize: 20, lineHeight: 1.2 }}>{project.name}</h2>
                    <p style={{ margin: 0, color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                      {slideCount} slide{slideCount === 1 ? "" : "s"}
                    </p>

                    <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
                      <Link
                        href={`/projects/${project.id}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          borderRadius: 8,
                          textDecoration: "none",
                          background: "#2860B2",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 600,
                          padding: "9px 12px",
                        }}
                      >
                        Open Deck
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href={`/projects/${project.id}/catalog`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          borderRadius: 8,
                          textDecoration: "none",
                          border: "1px solid rgba(255,255,255,0.16)",
                          color: "rgba(255,255,255,0.85)",
                          fontSize: 13,
                          padding: "9px 12px",
                        }}
                      >
                        <Settings size={14} />
                        Catalog
                      </Link>
                      {!isDefault && (
                        <button
                          onClick={() => handleSoftDeleteProject(project.id)}
                          disabled={busy}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            borderRadius: 8,
                            border: "1px solid rgba(239,68,68,0.35)",
                            background: "rgba(239,68,68,0.12)",
                            color: "#f87171",
                            fontSize: 13,
                            padding: "9px 12px",
                            cursor: busy ? "not-allowed" : "pointer",
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          <Trash2 size={14} />
                          {activeActionProjectId === project.id ? "Deleting..." : "Delete"}
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {deletedModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Recently Deleted projects"
          onClick={(event) => {
            if (event.target === event.currentTarget) setDeletedModalOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(2,6,12,0.7)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            zIndex: 50,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 640,
              maxHeight: "min(80vh, 720px)",
              background: "#0c1322",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            }}
          >
            <header
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 18px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Archive size={16} color="rgba(255,255,255,0.7)" />
                <h2 style={{ margin: 0, fontSize: 16 }}>Recently Deleted</h2>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>
                  {deletedProjects.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setDeletedModalOpen(false)}
                aria-label="Close"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                }}
              >
                <X size={14} />
              </button>
            </header>

            <div style={{ overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              {deletedProjects.length === 0 ? (
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, padding: 12 }}>
                  Nothing here.
                </div>
              ) : (
                deletedProjects.map((project) => (
                  <article
                    key={project.id}
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.03)",
                      padding: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>{project.name}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                        {project.id}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                      <button
                        type="button"
                        onClick={() => handleRestoreProject(project.id)}
                        disabled={busy}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          borderRadius: 8,
                          border: "1px solid rgba(52,211,153,0.35)",
                          background: "rgba(5,150,105,0.18)",
                          color: "#34d399",
                          fontSize: 13,
                          padding: "7px 10px",
                          cursor: busy ? "not-allowed" : "pointer",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        <RotateCcw size={14} />
                        Restore
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHardDeleteProject(project.id)}
                        disabled={busy}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          borderRadius: 8,
                          border: "1px solid rgba(248,113,113,0.45)",
                          background: "rgba(185,28,28,0.25)",
                          color: "#fecaca",
                          fontSize: 13,
                          padding: "7px 10px",
                          cursor: busy ? "not-allowed" : "pointer",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </article>
                ))
              )}
            </div>

            {deletedProjects.length > 0 && (
              <footer
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  padding: "12px 16px",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 10,
                }}
              >
                <button
                  type="button"
                  onClick={handlePurgeAllDeleted}
                  disabled={busy}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    borderRadius: 8,
                    border: "1px solid rgba(248,113,113,0.45)",
                    background: "rgba(127,29,29,0.3)",
                    color: "#fca5a5",
                    fontSize: 13,
                    padding: "8px 12px",
                    cursor: busy ? "not-allowed" : "pointer",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <Trash2 size={14} />
                  {bulkWorking ? "Clearing..." : "Clear all"}
                </button>
              </footer>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
