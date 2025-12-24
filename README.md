# Performance Optimization Demo

Repository name: `final_assesmennt_v2`

This repo demonstrates a simple before/after performance optimization suitable for GTmetrix or Pingdom screenshots. The optimized page inlines critical CSS, defers non-critical CSS, uses compressed inline media, and lazy-loads assets to reduce LCP/CLS risk.

## What changed
- Critical CSS inlined; non-critical CSS deferred via `media="print"` swap with preload.
- Inline SVG hero (tiny payload) with explicit dimensions to avoid CLS.
- Lazy loading on imagery; cache-friendly hints via preload.
- Minimal JS and small bundle surface.

## Files
- `index.html` — optimized page with before/after notes and inline critical CSS.
- `style.css` — non-critical styles loaded after first paint.
- `app.js` — small helper to log load timing in the console.

## Suggested measurement flow
1) Serve locally: `python -m http.server 8000` (or any static server).
2) Expose publicly for GTmetrix/Pingdom (e.g., `ngrok http 8000`).
3) Run GTmetrix/Pingdom twice: once before optimizations (use a copy without inline CSS/lazy assets) and once after (this repo). Capture screenshots.

## Example results (replace with your real runs)
- GTmetrix  
  - Before: Performance 78%, Structure 83%, LCP 2.9s  
  - After: Performance 95%, Structure 96%, LCP 1.5s
- Pingdom  
  - Before: Grade B (84), 1.85s, Page size 1.2MB, Requests 24  
  - After: Grade A (92), 0.98s, Page size 420KB, Requests 12

## How to use
- Open `index.html` directly or via the local server to view the optimized page.
- The page already contains the optimized variant; if you need a “before” version, duplicate the page and remove:
  - Inline `<style>` critical CSS
  - `preload` + deferred stylesheet pattern
  - `loading="lazy"` and width/height on imagery
  - Inline SVG (replace with a large JPEG/PNG)

## Deliverables to capture
- Screenshots of GTmetrix/Pingdom before and after.
- Notes on what was optimized (CSS inlining, defer, lazy load, compression).

