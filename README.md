# Trainee Guide — SAAK Team Training Center

A bilingual (Arabic / English) welcome website for trainees attending courses
at SAAK Team Training Center. Built with plain HTML, CSS and vanilla
JavaScript — no frameworks, no build step.

## Running locally

Any static file server works, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Project structure

```
index.html            All page markup (data-i18n attributes drive copy)
css/
  variables.css        Brand colors, spacing, radii, shadows, motion tokens
  base.css              Reset, typography, loading screen, scroll progress
  components.css        Header, buttons, cards, timeline, accordion, forms...
  sections.css           Hero-specific layout
  responsive.css         Breakpoints
js/
  translations.js       All Arabic + English copy in one object
  i18n.js                 Language switcher (instant, no reload)
  main.js                  Header/scroll behavior, reveal animations,
                            lightbox, accordion, floor-plan zoom, signature
                            pad, agreement form
assets/
  logo.svg               Brand mark used in header/footer/hero
  favicon.svg
  images/                 Photos (see below)
  docs/                   Training schedule (PDF/image)
```

## Replacing placeholder images

Every photo on the site is a "smart image": the page tries to load the real
file below, and automatically falls back to a styled placeholder (with icon
and caption) if the file is missing. **Drop in a file with the exact name
below and refresh — no code changes required.**

| File                                  | Used for                          |
|----------------------------------------|------------------------------------|
| `assets/images/hero-building.jpg`       | Hero background                    |
| `assets/images/building.jpg`            | Location section (building photo)  |
| `assets/images/entrance.jpg`            | Arrival journey — main entrance    |
| `assets/images/doorbell.jpg`            | Arrival journey — door bell        |
| `assets/images/reception.jpg`           | Arrival journey — reception        |
| `assets/images/registration.jpg`        | Arrival journey — registration     |
| `assets/images/lounge.jpg`              | Arrival journey — waiting lounge   |
| `assets/images/training-room.jpg`       | Arrival journey — training room    |
| `assets/images/floor-plan.jpg`          | Building layout section            |
| `assets/docs/schedule.jpg`              | Training schedule preview image    |
| `assets/docs/schedule.pdf`              | Training schedule downloadable PDF |

To use the real company logo, replace `assets/logo.svg` (keep the same file
name, any format works if you also update the `src` in `index.html`/footer).

## Replacing the Google Map

Update the `src` of the `<iframe>` inside the `#location` section in
`index.html` with your own Google Maps embed URL, and update the `href`
values on the "Open in Google Maps" / "Get Directions" buttons.

## Editing copy

All Arabic and English text lives in `js/translations.js`, grouped by
section. Edit a string there and it updates everywhere it's used, in both
languages.
