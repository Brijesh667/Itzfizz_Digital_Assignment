# Scroll-Driven Hero Animation

A recreation of the ItzFizz scroll-driven car hero section.

## Live Demo

https://Brijesh667.github.io/Itzfizz_Digital_Assignment/

## What It Does

- Staggered intro with headline letters and counting statistics on load
- Car movement tied directly to scroll progress
- Dynamic lane lines and speed streaks reacting to scroll speed
- Desktop pointer parallax on the car and ground glow
- Real-time vertical scroll progress bar with percentage readout
- Full prefers-reduced-motion accessibility support

## How It Works

- The section uses a 300vh scroll track containing a sticky 100vh stage.
- A single GSAP timeline links element animations to scroll via ScrollTrigger scrub.
- Lenis provides smooth scrolling synchronized directly to the GSAP ticker.
- All animations modify only transform and opacity properties for GPU acceleration.
- Pointer parallax uses gsap.quickTo without reading layout or scroll listeners.

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- GSAP with ScrollTrigger
- Lenis

## Getting Started

```bash
npm install
npm run dev
npm run build
```

## Deploying

```bash
npm run deploy
```

Publishes the production build in `dist` to the `gh-pages` branch.

## Project Structure

```
src/
  components/  UI components (Hero, CarScene, Headline, Stats, ScrollIndicator)
  hooks/       Animation and interaction hooks (intro, scroll, pointer, Lenis)
  lib/         GSAP and plugin registration
  data/        Static statistics data
```
