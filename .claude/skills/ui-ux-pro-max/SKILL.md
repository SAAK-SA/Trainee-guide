# UI/UX Pro Max - Design Intelligence: Complete Reference

## Overview

UI/UX Pro Max is a searchable design intelligence database containing 84 styles, 192 color palettes, 74 font pairings, 192 product types, 98 UX guidelines, 104 icon entries, 16 GSAP motion presets, and 25 chart types across 22 technology stacks.

## When to Apply

Use this resource for tasks involving "UI structure, visual design decisions, interaction patterns, or user experience quality control" — such as designing pages, creating components, selecting typography/color systems, reviewing interfaces for accessibility, or implementing animations and responsive behavior.

## Priority-Based Rule Categories

The framework organizes guidance across 10 categories ranked by impact:

1. **Accessibility** (CRITICAL): Minimum contrast ratios of 4.5:1, alternative text, keyboard navigation
2. **Touch & Interaction** (CRITICAL): Minimum 44×44px touch targets with 8px spacing
3. **Performance** (HIGH): Modern image formats, lazy loading, layout stability
4. **Style Selection** (HIGH): Product-type consistency using SVG icons
5. **Layout & Responsive** (HIGH): Mobile-first breakpoints without horizontal scroll
6. **Typography & Color** (MEDIUM): 16px base size, 1.5 line-height, semantic color tokens
7. **Animation** (MEDIUM): 150–300ms durations with reduced-motion support
8. **Forms & Feedback** (MEDIUM): Visible labels and contextual error messaging
9. **Navigation Patterns** (HIGH): Predictable navigation with deep linking
10. **Charts & Data** (LOW): Legends and accessible color usage

## Running Searches

The search tool requires Python 3.x and uses this syntax:

```bash
python "${CLAUDE_PLUGIN_ROOT}/.claude/skills/ui-ux-pro-max/scripts/search.py" "<query>" [--domain <domain>]
```

## Workflow Steps

**Step 1:** Extract product type, audience, style keywords, and technology stack from requirements.

**Step 2:** Generate a comprehensive design system using:
```bash
python ... "<query>" --design-system [-p "Project Name"]
```

**Step 2b:** Persist systems across sessions by adding `--persist --output-dir <project-root>`, creating `MASTER.md` and page-specific override files.

**Step 2c:** Tune outputs with design dials: `--variance` (1-10, from centered to bold), `--motion` (1-10, from subtle to complex), `--density` (1-10, from spacious to dense).

**Step 3:** Supplement with detailed domain-specific searches (e.g., `--domain color`, `--domain ux`).

**Step 4:** Apply stack-specific guidelines using `--stack <stack-name>`.

## Available Domains

`product`, `style`, `color`, `typography`, `google-fonts`, `chart`, `ux`, `landing`, `icons`, `gsap`, `react`, `web`, plus framework-specific stacks (Next.js, Vue, Flutter, SwiftUI, etc.).

## Output Formats

Support ASCII (terminal), Markdown (documentation), and JSON (machine-readable with persistence status).
