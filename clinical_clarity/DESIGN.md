---
name: Clinical Clarity
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3d4947'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#006860'
  on-tertiary: '#ffffff'
  tertiary-container: '#248279'
  on-tertiary-container: '#f3fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#9cf2e8'
  tertiary-fixed-dim: '#80d5cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#00504a'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.015em
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system embodies a balanced synthesis of clinical rigor and warm, empathetic human accessibility. Tailored for patients, caregivers, and health-conscious individuals seeking verified medical information and interactive assessment tools, the aesthetic communicates safety, scientific credibility, and approachable clarity.

The visual direction blends **Corporate / Modern** precision with **Humanist Minimalism**:
- Surfaces are expansive, bright, and hygienic without feeling sterile.
- Information architecture prioritizes stress reduction, legibility under anxiety, and high-trust transparency.
- Interactive tools (calculators, symptom checkers, drug interaction matrices) maintain structured readability with clear visual affordances, avoiding ambiguous gestures or high-friction visual noise.

## Colors
The palette is calibrated for high accessibility (WCAG AAA compliant for standard text), calm authority, and medical safety.

### Role Allocations & Hierarchy
- **Primary Teal (`#0D9488`)**: Represents healing, biological stability, and modern clinical guidance. Used for primary CTAs, active states, progress meters, and key brand highlights.
- **Deep Teal (`#0F766E`)**: High-contrast interactive hover/press states and critical medical badge backgrounds.
- **Secondary Soft Blue (`#3B82F6`)**: Diagnostic aids, secondary actions, informational badges, and interactive tool highlights.
- **Base Canvas & Surfaces**:
  - Pure Canvas: `#FFFFFF` (Base cards, elevated dialogs, and primary editorial reading surfaces).
  - Background Neutral: `#F8FAFC` (App scaffold, neutral page background).
  - Muted Surface / Field Fill: `#F1F5F9` (Search backgrounds, secondary card containers, disabled states).
- **Text & Editorial Elements**:
  - Primary Text: `#1E293B` (Deep Slate, providing strong typographic contrast without the harshness of pure black).
  - Secondary Text: `#64748B` (Metadata, supportive labels, timestamps, and captions).
  - Border Subdued: `#E2E8F0` (Card outlines, table gridlines, separators).
- **Semantic & Triage Tokens**:
  - **Success (`#22C55E`)**: Normal lab ranges, validated dosage checks, completion indicators.
  - **Warning (`#F59E0B`)**: Mild contraindications, review prompts, upcoming appointment reminders.
  - **Danger (`#EF4444`)**: Strictly reserved for severe medical warnings, red-flag emergency advisories, and destructive user operations.

## Typography
Typographic clarity is essential in healthcare to prevent cognitive fatigue and misinterpretation of dosage or symptom guidance. `Inter` is utilized universally across all layers for its optical balance, tall x-height, and neutral character geometry.

### Editorial & Utility Rules
- **Line Height**: Standard body content maintains a generous line height (`26px` on `16px` font) to support sustained reading of dense medical entries, health guides, and drug monographs.
- **Reading Constraints**: Long-form article text columns must be hard-capped at `65ch` to maximize reading speed and clinical comprehension.
- **Tabular Numerals**: Enable `font-feature-settings: 'tnum' 1` for lab test results, vitals trackers, dosage calculations, and comparison charts to ensure vertical alignment of digits.

## Layout & Spacing
The layout system enforces an 8-point rhythmic grid with a 4-point micro-adjustment scale for tight UI alignments.

### Grid Architecture
- **Desktop (1024px+)**: 12-column responsive fluid grid with maximum content container width of `1200px`. Gutters set to `1.5rem` (`24px`), outer margins set to `2rem` (`32px`).
- **Tablet (768px - 1023px)**: 8-column grid with `1.5rem` gutters and `1.5rem` outer margins. Interactive triage workflows collapse dual side panels into stacked vertical cards.
- **Mobile (320px - 767px)**: 4-column fluid layout with `1rem` (`16px`) gutters and `1rem` outer canvas padding. Action areas adhere strictly to a minimum vertical touch target of `48px`.

### Spacing Philosophy
Negative space is deliberately generous around critical instructions and interactive forms to reduce user cognitive load and prevent accidental tap errors in diagnostic inputs.

## Elevation & Depth
Depth is created through subtle surface separation rather than heavy, dramatic shadows, preserving a light, sanitary clinical impression.

### Elevation Levels
- **Layer 0 (Flat / Canvas)**: `#F8FAFC` page backdrop with no shadow.
- **Layer 1 (Standard Card / Resting Surface)**: Pure `#FFFFFF` fill bounded by a crisp, low-contrast border (`1px solid #E2E8F0`), supported by a faint ambient shadow:
  `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03);`
- **Layer 2 (Hover State / Interactive Card Focus)**: Slight vertical lift with soft diffuse spread:
  `box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.05), 0 4px 6px -4px rgba(15, 23, 42, 0.03);`
- **Layer 3 (Modals, Triage Alerts, Bottom Sheets)**:
  `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04);`

Overlays and dialogs employ a neutral tinted backdrop blur (`backdrop-filter: blur(4px); background-color: rgba(30, 41, 59, 0.4)`).

## Shapes
The shape strategy balances modern softness with structured authority. A roundedness factor of `2` provides an approachable, human-centered feel while retaining the rectangular geometry necessary for data cards and medical charts.

- **Micro Components (Badges, Chips, Pills)**: Full pill geometry (`rounded-full`, 9999px radius) to differentiate tags and status indicators from content cards.
- **Medium Elements (Buttons, Inputs, Selectors)**: `rounded-lg` (`0.5rem` / `8px`) or `rounded-xl` (`0.75rem` / `12px`) for comfortable thumb-friendly targets.
- **Structural Containers (Medical Article Cards, Health Calculators, Modals)**: `rounded-2xl` (`1rem` to `1.25rem` / `16px` to `20px`) for a clean, cohesive, and modern app feel.

## Components

### Buttons
- **Primary**: Background `#0D9488`, text `#FFFFFF`, radius `rounded-xl` (`12px`), height `44px` (desktop) / `48px` (mobile). Hover: `#0F766E`. Focus: 2px solid `#FFFFFF` with 2px offset ring of `#0D9488`.
- **Secondary / Informational**: Background `#F0FDF4` or `#EFF6FF`, border `1px solid #BFDBFE`, text `#1D4ED8` or `#0F766E`.
- **Ghost / Tertiary**: Transparent fill, text `#1E293B`, hover background `#F1F5F9`.
- **Emergency Action**: Background `#EF4444`, text `#FFFFFF`. Reserved exclusively for panic/emergency hotline and crisis prompts.

### Chips & Health Tags
- Height: `28px` to `32px`. Radius: `rounded-full` (`9999px`). Padding: `4px 12px`.
- **Status Variants**:
  - Informational: Fill `#EFF6FF`, text `#1E40AF`.
  - Normal / Verified: Fill `#DCFCE7`, text `#166534`.
  - Attention / Caution: Fill `#FEF3C7`, text `#92400E`.
  - Emergency / Red-Flag: Fill `#FEE2E2`, text `#991B1B`.

### Form Fields & Interactive Inputs
- **Base Input**: Fill `#FFFFFF`, border `1px solid #E2E8F0`, radius `rounded-xl` (`12px`), text `#1E293B`, placeholder `#94A3B8`.
- **Focus**: Border `#0D9488`, ring `3px rgba(13, 148, 136, 0.15)`.
- **Error**: Border `#EF4444`, helper text `#EF4444` accompanied by a leading icon for non-color-reliant accessibility.

### Cards & Tool Containers
- **Standard Card**: White `#FFFFFF` background, border `1px solid #E2E8F0`, radius `rounded-2xl` (`16px`), padding `1.5rem` (`24px`).
- **Interactive Tool Module (e.g., BMI / Dosage / Symptom Checker)**: Includes a muted top header bar (`#F8FAFC`), clear parameter segment controls, and highlighted result panels rendered in high-contrast primary teal tints (`#F0FDFA`).

### Checkboxes & Radio Buttons
- Box/Circle dimensions: `20px x 20px`. Border `2px solid #CBD5E1`.
- Checked state: `#0D9488` background with pure white check or inner dot. Active target area expanded to `44px` for touch accessibility.

### Medical Callouts & Alerts
- Standardized banner with `rounded-xl` border radius, thick left border (`4px`), and soft background tint matching the semantic state. All medical disclaimer callouts mandate a verified doctor icon or official clinical source reference.