# Design System Skill

A comprehensive design system tool for token architecture, component specifications, and slide generation.

## Core Capabilities

**Token Architecture:** Uses a three-layer structure (primitive → semantic → component) to create maintainable design systems. Primitives are raw values, semantic tokens add purpose, and component tokens handle specific UI needs.

**Component Specifications:** Provides templates defining states (default, hover, active, disabled) with properties for background, text, border, and shadow treatments.

**Presentation Generation:** The slide system creates "brand-compliant presentations using design tokens + Chart.js + contextual decision system." It includes BM25 search functionality and contextual recommendation logic.

## Key Features

- CSS variable generation and validation scripts
- Integration with Tailwind configuration
- Decision system CSVs covering strategies, layouts, typography, color, backgrounds, copy, and charts
- Pattern-breaking logic based on Duarte's Sparkline methodology
- Chart.js integration for data visualization
- Token compliance validation ensuring all styling uses CSS variables rather than hardcoded values

## Critical Rule

All slides must follow this requirement: "Import `assets/design-tokens.css` - single source of truth" and consistently use `var()` for all color, typography, and layout values.
