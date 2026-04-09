#!/usr/bin/env bash
# Extract PDF pages 16–22 (content after the Roadmap divider in Product Briefing Jan 2026).
# Requires: pip3 install -r scripts/requirements-pdf.txt
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PDF="${1:-$ROOT/../../deck discussion transcripts/the Nextiva Platform - Product Briefing Jan 2026.pdf}"
if [[ ! -f "$PDF" ]]; then
  echo "PDF not found: $PDF" >&2
  exit 1
fi
extract() {
  local page="$1" out="$2"
  python3 "$ROOT/scripts/extract_pdf_page.py" --pdf "$PDF" --page "$page" --out "$ROOT/public/product-briefing/$out" --dpi 200
}
extract 16 unified-cxm-platform-q4-cy24.png
extract 17 roadmap-human-ai-timeline.png
extract 18 phased-delivery-jan-feb-mar.png
extract 19 phased-delivery-apr-jun-omni.png
extract 20 phased-delivery-next-studio-billing.png
extract 21 confidential-nda-divider.png
extract 22 why-ai-nextiva-value.png
echo "Done. Outputs in public/product-briefing/"
