# Timeline App

A compact React + TypeScript UI that renders an interactive circular timeline. Events are presented as dots (period) on a circle and as a swipeable events list of each dot — clicking a dot rotates the circle to focus his events while the slider keeps content in sync.

## Features
- Circular timeline layout with interactive dots
- Click / control navigation that rotates the timeline (smooth animation)
- Swipeable events slider (Swiper) synchronized with the circle
- Animated year/period display
- Type-safe data model with mock data for local development
- SCSS-based styles (CSS Modules used for timeline components)
  
## Tech stack
- React (function components)
- TypeScript
- SCSS (CSS Modules for component styles)
- Webpack (custom build)
- Swiper (events slider)
- SVGR for importing SVGs
- npm for scripts and dependency management

## Installation

```bash
npm install
```
## Run

```bash
npm start
```

## Project structure

```
public/
  index.html

src/
  index.tsx                       # app bootstrap
  App.tsx                         # root component
  components/
    Timeline/
      TimelineComponent.tsx       # main timeline component
      TimelineCircle.tsx          # circular layout & placement of dots
      TimelineDot.tsx             # individual dot component
      TimelineEvents.tsx          # Swiper-based events slider
      TimelineControls.tsx        # prev/next controls
      TimelinePeriod.tsx          # animated year/period display
      timeline.module.scss        # timeline component styles (SCSS Module)
  hooks/
    useTimelineRotation.ts        # main logic of rotation animation and selection sync
  mocks/
    timelinePoints.ts             # mocked timeline data used by the UI
  types/
    timelineTypes.ts              # TimeLinePoint and related types
    global.d.ts                   # global types for SVG and SCSS imports
  styles/
    global.scss                   # global styles

webpack.config.js
package.json
tsconfig.json
```

## How it works

1. index.tsx mounts `App`.
2. `App` renders `TimelineComponent`, which wires together visual pieces and data.
3. `TimelineComponent` uses the mocked `timelinePoints` (type `TimeLinePoint`) to render:
   - `TimelineCircle` — computes positions and renders `TimelineDot` elements around a circle.
   - `TimelineEvents` — a Swiper instance that shows detailed event cards.
   - `TimelineControls` — prev/next UI that navigates both the circle and the Swiper.
   - `TimelinePeriod` — an animated display for the currently active year/period.
4. `useTimelineRotation` encapsulates rotation logic and synchronizes selection between the circle and the slider (handles animation easing and index management).
5. SVGs are imported via SVGR and styles for the timeline components use SCSS modules to scope styles.

## Usage examples
- Start the server: `npm start` - open http://localhost:8080 and interact with the circular timeline.
- Click any dot to rotate the timeline to that event; use the arrows or swipe in the events panel to navigate sequentially.


## Environment & notes
- The repository uses a webpack dev server for development with HMR.
- Mock data lives in src/mocks/timelinePoints.ts — replace with a real data source as needed.
- Styles are split into global (src/styles/global.scss) and component-scoped SCSS modules.
