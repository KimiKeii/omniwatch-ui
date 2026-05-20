# OmniWatch UI

A React-based smartwatch dashboard built as an intern task for **USHER Technologies Inc.**  
This project was completed as part of a guided introduction to React state and interactivity.  
May 2026

---

## Project Description

OmniWatch is a simulated smartwatch UI that displays live time, fitness stats, and a fully functional stopwatch. It was built across two days as part of USHER's Unified Resilience Platform intern onboarding program.

- **Day 1** — Static components and props
- **Day 2** — React hooks, state, and interactivity

---

## Features

- **Live Clock** — Displays the current time in 12-hour format, updating every second
- **Live Date** — Shows the current date below the clock
- **Mode Toggle** — Switch between Clock and Stopwatch views
- **Stopwatch** — Start, stop, reset, and record laps with centisecond precision
- **Lap List** — Newest laps appear on top, scrollable within the watch frame
- **Stat Rings** — Displays Steps, Calories, and Heart Rate as circular indicators
- **Sync Stats** — Simulates fetching fresh fitness data with randomized values
- **Heart Rate Pulse** — Heart rate auto-updates every 3 seconds to simulate a live sensor

---

## Tech Stack

- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — Build tool
- [Tailwind CSS](https://tailwindcss.com/) — Styling

---

## React Concepts Covered

| Concept | Where it's used |
|---|---|
| `useState` | Clock, stopwatch, stats, mode toggle |
| `useEffect` | Clock interval, stopwatch tick, heart rate pulse |
| `useCallback` | Stopwatch handlers (start, stop, reset, lap) |
| Lifting state up | `currentMode` owned by App, passed to `ModeToggle` |
| Props | All components receive data from App.jsx |
| Functional updater form | `setElapsed(prev => prev + 10)` inside intervals |

---

## Project Structure

```
src/
├── components/
│   ├── ModeToggle.jsx       # Toggles between clock and stopwatch view
│   ├── StatRing.jsx         # Circular fitness stat indicator
│   ├── StopwatchWidget.jsx  # Stopwatch display with controls and lap list
│   ├── TimeDisplay.jsx      # Clock display with date
│   └── WatchFrame.jsx       # Outer watch shell wrapper
├── docs/
│   └── COMPONENTS.md        # Component documentation
├── hooks/                   # (reserved for custom hooks)
├── App.jsx                  # Root component — owns all state
├── App.css
├── index.css
└── main.jsx
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Git Commit Convention

This project follows a structured commit format:

```
feat: add live clock with useState and setInterval
feat: implement stopwatch start, stop, reset, lap
feat: add ModeToggle component with lifted state
feat: move stats to state and add Sync Stats button
feat: add heart rate pulse interval via useEffect
perf: wrap stopwatch handlers in useCallback
docs: update COMPONENTS.md with Day 2 components and callbacks
```

---

## Author

USHER Technologies Inc. — Intern Onboarding Program  
Unified Resilience Platform · May 2026

## Created by
Earl Joshua V. Espinosa
all rights Reserve
