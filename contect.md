# Project Context — Gradient Club Website

## Last Updated
2026-08-07

## Project Overview
Premium, minimal, tech-focused website for the Gradient technical club.

## Current Phase
UI/UX Fix — Rewrote card stack animation using pure CSS classes.

## Card Stack Fix — Third Attempt
### Root Causes Fixed
1. **Inline style transitions are unreliable in React**: Replaced all inline `style={{ transition: ... }}` with CSS class-driven transitions (`.psc` base class with `transition` property).
2. **`prefers-reduced-motion` was killing transitions**: The global `*` selector with `transition-duration: 0.01ms !important` was overriding card transitions even when not needed. Added `:not(.psc)` exclusion.

### New Architecture
- Cards use CSS class `.psc` (Physical Stack Card) with transitions defined at the CSS level
- Position classes: `.stack-top`, `.stack-second`, `.stack-third`, `.stack-hidden`
- Deal animation class: `.dealing-out` (slides card to left with `!important` override)
- React only swaps class names — CSS handles all animation
- Cards rendered in fixed DOM order via `items.map()` — React never unmounts/remounts

## Build Verification
- Production build confirmed successful (`npm run build`)
