#!/usr/bin/env python3
"""
Extract one page from a PDF as a PNG (for deck reference images).

Requires: pip3 install -r scripts/requirements-pdf.txt  (PyMuPDF)

Examples:
  python3 scripts/extract_pdf_page.py \\
    --pdf "../../deck discussion transcripts/the Nextiva Platform - Product Briefing Jan 2026.pdf" \\
    --search "Nextiva CXPaaS Architecture" \\
    --out public/product-briefing/cxpaas-architecture.png

  python3 scripts/extract_pdf_page.py --page 9 --dpi 200

Batch (PDF pages 16–22 → product-briefing-19 … 25 assets):
  npm run extract-briefing-post-roadmap
  # or: bash scripts/extract_product_briefing_post_roadmap.sh
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


def find_page_by_search(doc, needle: str) -> int:
    needle_l = needle.lower()
    matches: list[int] = []
    for i in range(len(doc)):
        text = doc[i].get_text()
        if needle in text or needle_l in text.lower():
            matches.append(i)
    if not matches:
        raise SystemExit(f"No page contains search string: {needle!r}")
    if len(matches) > 1:
        sys.stderr.write(
            f"Warning: {len(matches)} pages match {needle!r}: {[m + 1 for m in matches]}. Using first.\n"
        )
    return matches[0]


def main() -> None:
    root = Path(__file__).resolve().parent.parent
    default_pdf = root.parent.parent / "deck discussion transcripts" / "the Nextiva Platform - Product Briefing Jan 2026.pdf"

    parser = argparse.ArgumentParser(description="Extract a PDF page to PNG.")
    parser.add_argument(
        "--pdf",
        type=Path,
        default=default_pdf if default_pdf.is_file() else None,
        help=f"Path to PDF (default: {default_pdf})",
    )
    parser.add_argument(
        "--page",
        type=int,
        metavar="N",
        help="1-based page number (overrides --search)",
    )
    parser.add_argument(
        "--search",
        default="Nextiva CXPaaS Architecture",
        help="Substring to locate page if --page is omitted",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=root / "public" / "product-briefing" / "cxpaas-architecture.png",
        help="Output PNG path",
    )
    parser.add_argument(
        "--dpi",
        type=int,
        default=200,
        help="Rasterization DPI (default 200)",
    )
    args = parser.parse_args()

    if args.pdf is None:
        print("Error: pass --pdf or place the Product Briefing PDF at:", default_pdf, file=sys.stderr)
        sys.exit(1)

    pdf_path = args.pdf.expanduser().resolve()
    if not pdf_path.is_file():
        print("Error: PDF not found:", pdf_path, file=sys.stderr)
        sys.exit(1)

    try:
        import fitz  # PyMuPDF
    except ImportError:
        print("Error: PyMuPDF not installed. Run: pip3 install -r scripts/requirements-pdf.txt", file=sys.stderr)
        sys.exit(1)

    doc = fitz.open(pdf_path)
    n_pages = len(doc)
    try:
        if args.page is not None:
            if args.page < 1 or args.page > len(doc):
                print(f"Error: --page must be 1..{len(doc)}", file=sys.stderr)
                sys.exit(1)
            index = args.page - 1
        else:
            index = find_page_by_search(doc, args.search)

        page = doc[index]
        scale = args.dpi / 72.0
        mat = fitz.Matrix(scale, scale)
        pix = page.get_pixmap(matrix=mat, alpha=False)

        out_path = args.out
        if not out_path.is_absolute():
            out_path = (root / out_path).resolve()
        out_path.parent.mkdir(parents=True, exist_ok=True)
        pix.save(out_path.as_posix())
    finally:
        doc.close()

    print(f"Wrote page {index + 1} of {pdf_path.name} ({n_pages} pages) → {out_path}")
    print(f"  Size: {out_path.stat().st_size // 1024} KB · DPI: {args.dpi}")


if __name__ == "__main__":
    main()
