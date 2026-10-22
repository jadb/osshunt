---
name: OSSHunt
description: A sourced directory of open-source alternatives, laid out like a regulatory facts label.
colors:
  ink: "#0d0d0d"
  ink-soft: "#3d3d3d"
  paper: "#ffffff"
  band: "#ffd400"
  muted-grey: "#767676"
  wash-grey: "#ececec"
  initial-grey: "#e6e6e6"
  hatch-grey: "#cfcfcf"
typography:
  display:
    fontFamily: "'Archivo Cond', 'Archivo', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 5.6vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "'Archivo Cond', 'Archivo', 'Arial Narrow', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 900
    letterSpacing: "0.02em"
  title:
    fontFamily: "'Archivo Cond', 'Archivo', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.6rem)"
    fontWeight: 900
    lineHeight: 1.1
  body:
    fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
rounded:
  none: "0"
  round: "50%"
spacing:
  rule-1: "1px"
  rule-3: "3px"
  rule-8: "8px"
  gutter: "clamp(16px, 3.2vw, 40px)"
  max-width: "1360px"
components:
  facts-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "6px 12px 8px"
  fit-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.ink}"
    padding: "5px 6px"
  tier-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "24px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  chip-hover:
    backgroundColor: "{colors.band}"
  search-button:
    backgroundColor: "{colors.band}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  search-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.band}"
  runkit-tile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "52px"
  avatar:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.round}"
    size: "32px"
  avatar-initial:
    backgroundColor: "{colors.initial-grey}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.round}"
    size: "32px"
---

# Design System: OSSHunt

## Overview

**Creative North Star: "The Facts Label"**

OSSHunt looks like the nutrition panel on a package: black rules on white paper, one signal yellow, condensed heavy headings and plain labelled rows. Every claim sits in a ruled cell next to its value, and what is not known is printed as such. The page reads as a document of record, not a marketing surface. Structure comes from rules of three fixed weights (1px, 3px, 8px), never from shadows, fills or rounded cards.

Density is moderate and tabular: figures use tabular numerals, rows are tight (3px to 9px vertical padding), and the content column runs up to 1360px. Yellow is a highlighter, not a brand wash: it marks the single most important row (fit), hover and selection, and the focus halo. The system is light only.

**Key Characteristics:**
- Black ink on pure white, one yellow band colour.
- Three rule weights carry all hierarchy and containment.
- Square corners everywhere except circular logo avatars.
- Condensed Archivo 900 display against plain Archivo text.
- Unknown is a visible, styled value (italic, dashed), never blank or guessed.
- No decorative motion; the only movement is the sample rotation on the home page.

## Colors

Two working colours and a yellow highlighter, with a few greys that only signal "absent" or "secondary".

### Primary
- **Ink** (`#0d0d0d`): text, every rule and border, selected chips, scrollbar thumb, focus outline, tooltips.
- **Signal Band** (`#ffd400`): the fit row in a Facts label, hover on links/chips/list items, search button, text selection, skip link, the 6px halo around focused controls.

### Neutral
- **Paper** (`#ffffff`): page and all component backgrounds.
- **Soft Ink** (`#3d3d3d`): secondary text, notes, footers, unknown values (italic), initials.
- **Muted Grey** (`#767676`): icon and border colour for "no" and "not established" run-kit tiles.
- **Wash Grey** (`#ececec`): background behind a group of alternative ("one of") tiles.
- **Initial Grey** (`#e6e6e6`): fill of the dashed fallback avatar.
- **Hatch Grey** (`#cfcfcf`): diagonal strike lines on "no" tiles.

### Named Rules
**The One Highlighter Rule.** Yellow marks fit, hover, selection and focus only. It is never a section background except the narrow fit band, and never text colour on white.

**The Ink-and-Paper Rule.** Any new surface is black rules on white. Grey is for absence or secondary text, never for decoration.

## Typography

**Display Font:** Archivo Cond 900 (fallback Archivo, Arial Narrow, sans-serif), self-hosted.
**Body Font:** Archivo 400/700/900 (fallback Helvetica Neue, Arial, sans-serif), self-hosted.

**Character:** A heavy condensed face for names and headings, set against a plain grotesque for reading, like a label printed over a spec sheet. Only two files carry display; weights 400, 700 and 900 of Archivo cover everything else (600/800 requests resolve to the nearest loaded weight).

### Hierarchy
- **Display** (Cond 900, `clamp(2.5rem, 5.6vw, 5rem)`, 0.96): the page H1.
- **Headline** (Cond 900, 1.125rem, uppercase, 0.02em tracking): H2 section heads with a 3px rule beneath, and H3 group heads.
- **Title** (Cond 900, `clamp(1.25rem, 2vw, 1.6rem)`, 1.1): product name in a Facts label head; brand mark at 1.5rem; incumbent name at 1.5rem.
- **Body** (Archivo 400, 1rem, 1.45, tabular numerals): running text; lede 1.0625rem in Soft Ink, max 56ch; notes 0.8125rem, max 70ch.
- **Label** (Archivo 700, 0.75rem to 0.875rem): row labels, chips, nav (600), figures in the serving band (900, 1.125rem).

### Named Rules
**The Tabular Rule.** Numbers align in columns; `font-variant-numeric: tabular-nums` is set on body.

**The Condensed-For-Names Rule.** Condensed 900 is for headings and product names only; running text and controls use Archivo.

## Layout

A single centred column (`max-width` 1360px) with a fluid gutter of `clamp(16px, 3.2vw, 40px)` on both sides. The home hero is a two-column grid (11fr / 9fr, gap `clamp(28px, 5vw, 72px)`) with copy and search on the left and the sample Facts labels on the right; at 900px and below it stacks to one column. Sections are separated by `clamp(32px, 4vw, 56px)` of top padding and an H2 with a 3px bottom rule. Category groups are auto-fill grids of 230px minimum cells, outlined by a 3px top rule and 1px cell rules. The price list is a four-column row (name, price, alternatives, source) collapsing to two columns at 900px. The page header ends in an 8px rule; the footer begins with one. A skip link and `main` landmark are present.

## Elevation & Depth

Flat. There are no drop shadows and no layering by tone. Depth is expressed with rule weight: 1px for row dividers, 3px for containers and section heads, 8px for page-level boundaries and the Facts label header. The only `box-shadow` is the focus halo (a 6px yellow ring outside a 3px ink outline), and overlays (search results, tooltips) are simply boxed in ink.

### Named Rules
**The Rules-Not-Shadows Rule.** Hierarchy is made with 1, 3 and 8px rules. Do not add blur shadows, tints or elevation.

## Shapes

Square. Borders are 2px to 4px solid ink on controls, 3px on tiles and labels. Corners are `0` on inputs and buttons (explicitly reset). The only curve is the 50% circle of logo avatars, which overlap by 9px in a flow. Tier boxes are 24px squares with a 2px border.

## Components

### Facts Label
The signature unit: a product described as a ruled sheet.
- **Frame:** 3px ink border, paper background, 0.875rem text, padding `6px 12px 8px`.
- **Head:** optional 28px logo plus the name in Condensed 900, closed by an 8px ink rule.
- **Rows:** label left, value right (right-aligned, wraps anywhere), each closed by a 1px rule; the last has none. Rows are: Fit for (incumbent), License (with "· OSI" when approved), Paid-feature tier, Self-host (Yes/No), Paid-feature limits.
- **Fit band:** the fit row alone is filled yellow, weight 800, closed by a 4px rule, bleeding 6px past the content edge. It is omitted when no incumbent context exists.
- **Tier box:** a 24px square showing the letter A, B, C, S or U in 900 weight, followed by its plain meaning in words (for example, "Paid extras for admin, identity or audit"). The letter never appears alone.
- **Unknown:** "None established" in italic Soft Ink.
- **Foot:** "Checked {date}. Fit is not feature parity." at 0.75rem in Soft Ink.

### Avatar Flow
Logos as identification of the tool, in overlapping 32px circles (2px ink border, 5px inner padding, up to 4 or 5 shown, then a "+N" circle). Wide wordmarks (aspect ratio above 1.8) and missing logos fall back to a dashed-border circle with the initial in Soft Ink on Initial Grey. In category cells a bold arrow (18px, square caps) separates paid tools from their alternatives.

### Run-Kit Tiles
Icon tiles (52px minimum, 3px ink border, square) with 24px-grid icons drawn at 2px stroke with square caps and mitred joins. States: **yes** is solid ink border and ink icon; **no** is Muted Grey with 135-degree hatch lines; **unknown (not established)** is Muted Grey with a 3px dashed border. Required components show logos (28px), icons or short text. Alternatives sit in a Wash Grey strip separated by an "or" label. Each tile is focusable and shows an ink tooltip on hover and keyboard focus, and has an aria-label stating yes, no or "not established". A hint line explains the encoding.

### Switcher Chips
A row of sibling links under a 3px top rule and 1px bottom rule with a bold label. Each chip is a 2px ink-bordered square box (bold name, optional fit as small text). Hover turns yellow; the current page is inverted (ink fill, white text, `aria-current="page"`). Sample chips on the home page use the same shape with `aria-pressed` for the selected state.

### Search
A 4px ink frame holding a borderless input (up to 1.5rem) and a yellow "Find" button divided by a 4px rule; the button inverts to ink with yellow text on hover. Focus draws the 6px yellow halo around the whole frame. Results are a listbox in a 4px ink box with 1px row dividers; the active option is yellow. An empty result states "Nothing matches" and offers category browsing.

### Navigation and Page Frame
Header: brand in Condensed 900 at 1.5rem, three text links (600 weight, underline on hover), the "Checked {date}" stamp right-aligned, all above an 8px rule. Footer: 8px top rule and a one-paragraph disclaimer at 0.8125rem.

### States
Links: underlined (2px, offset 0.2em); hover yellow background. Focus: 3px ink outline, 3px offset, 6px yellow halo. Scrollbar: 12px, ink thumb on paper. Selection: yellow. Motion: the home sample panel rotates every 8 seconds, pauses on hover, stops permanently on the first click, key press or focus, offers a "Stop auto-rotating" control, and does not auto-rotate under reduced-motion. Nothing else animates.

## Do's and Don'ts

### Do:
- **Do** build with ink rules at 1px, 3px and 8px on white paper, with square corners.
- **Do** show unknown as italic Soft Ink ("None established") or, for tiles, a dashed Muted Grey border with the words "not established" in the label.
- **Do** print the tier letter inside its 24px box and always follow it with the plain-language meaning.
- **Do** put fit on the yellow band row, and place "Fit is not feature parity" in every label footer.
- **Do** show a logo only to identify a product, at 28px in a label head or inside a 32px circle, with a dashed initials circle when the mark is wide or absent.
- **Do** date every claim with the "Checked" stamp.
- **Do** keep the focus treatment (3px ink outline, 3px offset, 6px yellow halo) on every interactive element.

### Don't:
- **Don't** use yellow as body text, as a large background, or as decoration.
- **Don't** add shadows, gradients (other than the hatch on "no" tiles), rounded cards or tinted panels.
- **Don't** animate beyond the sample rotation; no hover transitions or entrance effects.
- **Don't** write or imply parity: no "equivalent", no "free replacement", no tier A shown as "no limits".
- **Don't** render a missing value as a blank, a zero or a guess; a dash is not zero.
- **Don't** use logos as endorsement, trust badges or decoration.
- **Don't** set running text in Archivo Cond, or introduce a third typeface.
