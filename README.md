# Stormwater Planning for Construction Training — Landing Page

Standalone marketing landing page covering the two HAZWOPER-OSHA.com courses in the
Stormwater Planning for Construction subcategory:

- [Qualified SWPPP Practitioner (QSP) Training](https://hazwoper-osha.com/online-courses/qualified-swppp-practitioner-qsp-training) — field inspections & BMP implementation
- [Qualified SWPPP Preparer Training](https://hazwoper-osha.com/online-courses/qualified-swppp-preparer-training) — SWPPP document preparation & design

Pure HTML/CSS/JS, no build step, no dependencies. Modeled on the Property Management Mold
Training (PMMT) landing page in this same workspace, restyled with a teal/water accent and
extended to present two courses side by side instead of one.

## Structure

```
index.html      — page markup/content (hero, course comparison, curriculum, pricing, FAQ)
faq.html         — extended FAQ / resource page
css/styles.css   — all styling
js/main.js       — mobile nav toggle, FAQ accordion, per-course enroll form UX
```

## Current state

- Static, self-contained landing page only.
- Both "Continue to Payment" forms are **front-end only** — they don't submit anywhere or
  charge anyone. Submitting just swaps in a confirmation message (see `js/main.js`).
- No Stripe, no course-platform API, no auth, no database.
- Course pricing ($379.99/seat, 7 hours each), certificate validity windows (24 months for
  QSP Practitioner, 36 months for SWPPP Preparer), and curriculum content are drawn from the
  live hazwoper-osha.com course pages as of 2026-07-18.
- Contact email (`info@stormwaterplanningtraining.us`) and the "SPCT" brand mark are
  placeholders in the same pattern PMMT used — swap in the real domain/brand once one exists.
  The phone number (1-866-429-6742) is the real HAZWOPER-OSHA support line shown on the
  source course pages.
- Logo is `images/spct-logo.png` (user-supplied artwork, background removed, black line art
  on a transparent PNG). The dark footer uses `filter:brightness(0) invert(1)` (see
  `.logo-icon-footer` in `css/styles.css`) to flip it white against the navy background,
  rather than shipping a second image. Also used as the favicon / apple-touch-icon.
- The hero uses a CSS gradient + data-URI pattern instead of a photo.

## Planned next steps (not yet implemented)

1. Connect both enroll forms to the HAZWOPER-OSHA course/enrollment API.
2. Add Stripe Checkout (or Stripe Elements) for real payment.
3. Point a real domain at this page once it's off local/GitHub Pages hosting.

## Local preview

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```
