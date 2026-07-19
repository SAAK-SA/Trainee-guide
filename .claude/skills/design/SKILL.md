# Design Skill

A comprehensive design system built on Claude's Agent SDK that unifies multiple design disciplines under one skill framework.

## Core Capabilities

The skill covers **eight major design areas**: brand identity, design tokens, UI styling, logo generation, corporate identity programs (CIP), presentations, banner design, and social media graphics.

## Key Features

**Logo Design:** Generates 55+ styles using Gemini AI with access to 30 color palettes and 25 industry guides. The system can produce design briefs and search across styles, colors, and industries.

**CIP Mockups:** Creates 50+ deliverables across 20 styles and industries, with output ranging from individual pieces (business cards, letterhead) to complete corporate identity sets.

**Visual Content:** Handles presentations with Chart.js integration, banners across 22 art direction styles for social/web/print, SVG icons in 15 styles, and multi-platform social media graphics.

**Design System Integration:** "Unified design skill: brand, tokens, UI, logo, CIP, slides, banners, social photos, icons" with routing to specialized external skills for brand voice, token specifications, and UI implementation.

## Technical Approach

The skill uses Python scripts for generation and search functions, leveraging Gemini's AI models (Nano, Flash, and Pro variants). It emphasizes HTML/CSS design workflows with screenshot export capabilities for precise dimension delivery.

**Setup requirement:** Python 3 with google-genai and Pillow libraries, plus a Gemini API key.
