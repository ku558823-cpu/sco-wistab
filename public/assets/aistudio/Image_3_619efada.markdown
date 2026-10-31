---
name: Clinical Direct
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4d6079'
  primary: '#000917'
  on-primary: '#ffffff'
  primary-container: '#0d2137'
  on-primary-container: '#7689a4'
  inverse-primary: '#b5c8e5'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#000a08'
  on-tertiary: '#ffffff'
  tertiary-container: '#002521'
  on-tertiary-container: '#17988b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b5c8e5'
  on-primary-fixed: '#081c32'
  on-primary-fixed-variant: '#364860'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  cta-terracotta: '#E05A2B'
  cta-terracotta-hover: '#C84B1F'
  surface-ice: '#F4F8FA'
  surface-white: '#FFFFFF'
  border-subtle: '#E2E8F0'
typography:
  display:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
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
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-eyebrow:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system establishes an authoritative, high-converting digital experience tailored for modern medical practices and specialized healthcare providers. It balances clinical authority with immediate consumer trust and decisive transactional flow.

The target audience encompasses prospective patients, practice administrators, and healthcare professionals seeking direct access to care. The visual language conveys competence, frictionless clarity, and technical reliability. Drawing from a Corporate/Modern movement tailored for clinical domains, the aesthetic relies on crisp typography, deep architectural contrasts, and structured card surfaces rather than decorative ornamentation.

## Colors

The palette is engineered around high visual contrast and unambiguous intent hierarchies:

- **Primary (`#0D2137`)**: A deep, rich clinical navy applied to structural hero elements, solid headers, primary navigation, and high-impact typographic messaging.
- **Secondary (`#0284C7`) & Tertiary (`#0D9488`)**: Precise medical cyan and teal accents used for informational badges, eyebrow headers, progress markers, and supporting indicators.
- **Neutral (`#64748B`)**: Slate neutral handling body copy, muted microcopy, and subtle container structural outlines.
- **Named Color `cta-terracotta` (`#E05A2B`)**: An intentional, energetic terracotta tone reserved exclusively for conversion events—booking forms, review requests, and primary mobile action bars. It should not be diluted by non-interactive usage.
- **Surfaces (`#FFFFFF` and `#F4F8FA`)**: Layered clinical white and tinted ice backdrops that establish clear section division and readability.

## Typography

Typographic scale is structured around `Inter` across all functional roles. Tight tracking (`-0.02em` to `-0.01em`) on large display and heading levels delivers a crisp, dense editorial presence suited to enterprise healthcare. Eyebrows and categorical metadata utilize `title-eyebrow` in uppercase styling with positive tracking (`0.08em`) in accent cyan/teal to ground section headers. Body text retains generous proportional leading (`1.5` to `1.6`) to maintain effortless legibility during high-stress healthcare evaluations.

## Layout & Spacing

The system implements a mobile-first fluid grid structured for single-column priority on devices under 640px, scaling into a disciplined 12-column framework on wider screens.

- **Mobile (<640px)**: 4-column layout with `1rem` outer margin and `1rem` gutters. Vertical stacked flow dominates to guarantee seamless thumb interaction and zero horizontal friction.
- **Tablet (640px–1024px)**: 8-column layout with `1.5rem` margins and `1.25rem` gutters. Cards switch to dual-column pairs.
- **Desktop (>1024px)**: 12-column layout capped at a maximum width of `1200px` centered, utilizing `2.5rem` outer page margins.

Spacing follows an 8pt structural rhythm. Structural sections alternate between pure white (`#FFFFFF`) and ice-blue tints (`#F4F8FA`) with `space-2xl` internal vertical padding on desktop and `space-xl` on mobile.

## Elevation & Depth

Visual depth is achieved through quiet, disciplined layering that emphasizes planar containment over dramatic 3D space:

- **Level 0 (Flat Ground)**: Background fields tinted in `#F4F8FA` or deep `#0D2137`.
- **Level 1 (Clinical Cards & Form Panels)**: `#FFFFFF` surfaces bounded by a crisp 1px border (`#E2E8F0`) paired with a soft ambient shadow: `0px 2px 4px rgba(13, 33, 55, 0.04), 0px 8px 16px rgba(13, 33, 55, 0.06)`.
- **Level 2 (Interactive Floating Elements)**: Mobile bottom action sheets, dropdown navigations, and sticky action bars: `0px 4px 12px rgba(13, 33, 55, 0.08), 0px 16px 32px rgba(13, 33, 55, 0.12)`.
- **CTA Depth**: Buttons do not use heavy shadows; they rely on sharp contrast against the background surface, adopting a faint press-state translate (`translate-y-0.5`) on interaction.

## Shapes

The design system enforces a disciplined `roundedness: 1` (`0.25rem` / 4px base). Inputs, buttons, form controls, and nested indicators use a 4px radius, while structural panels and content cards scale to `rounded-lg` (`0.5rem` / 8px). This conservative, squared-off curvature conveys architectural rigor, clinical precision, and institutional stability, avoiding the overly playful or casual character of pill-shaped motifs.

## Components

### Buttons
- **Primary CTA**: Colored in `cta-terracotta` (`#E05A2B`) with white text, font weight 600, `0.25rem` radius, and horizontal padding of `1.25rem` with a vertical height of `48px` (ensuring touch targets meet minimum mobile accessibility). Hover states darken to `#C84B1F`.
- **Secondary / Ghost**: Deep navy (`#0D2137`) border (1.5px) or solid navy background on light cards; transparent with white outline when positioned over dark navy hero sections.

### Form Inputs & Fields
- Height of 48px with `0.25rem` border radius. 
- Crisp 1px `#CBD5E1` boundary expanding to 1.5px `#0284C7` (accent teal) on focus with no chromatic glow.
- Labels are rendered in `label-md` weight 600 above the input field, using deep navy `#0D2137` to guarantee clarity.

### Cards & Structured Containers
- Built on a pure white `#FFFFFF` surface with an explicit 1px `#E2E8F0` hairline border and soft Level 1 ambient elevation.
- Standard internal padding is `1.25rem` on mobile, expanding to `1.75rem` on larger displays.
- Card headers feature clear hierarchical progression: small cyan eyebrow tag, bold heading, followed by neutral slate descriptive text.

### Sticky Mobile Action Bar
- Fixed to the mobile screen baseline. Features a two-part conversion layout: high-contrast secondary action (e.g., "Call Now" in navy outline or neutral dark) beside a dominant full-width terracotta CTA ("Free Review" / "Book Appointment").
- Enclosed with a top 1px border (`#E2E8F0`) on a crisp translucent or solid white foundation (`rgba(255, 255, 255, 0.96)` with backdrop blur).

### Badges & Eyebrows
- Compact chips rendered with `0.25rem` radius, 8px vertical and 12px horizontal padding.
- Pale medical tint backgrounds (`rgba(2, 132, 199, 0.08)`) with high-contrast text (`#0284C7`) for trust badges, location markers, and category titles.