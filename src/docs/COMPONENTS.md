# OmniWatch Components

## WatchFrame
The outer shell styled like a physical round smartwatch. Wraps all other components, with a purple gradient fading in background.

### Props
| Prop | Type | Description |
|----------|---------|-------------------------------|
| children | node | The components rendered inside the watch screen |

### Example
<WatchFrame>
  <TimeDisplay hours="10" minutes="42" seconds="05" format="12" />
</WatchFrame>

---

## TimeDisplay
Shows the current time and current date. Supports both 12hr and 24hr format.

### Props
| Prop | Type | Description |
|---------|--------|-------------------------------|
| hours | string | The hour value to display |
| minutes | string | The minutes value to display |
| seconds | string | The seconds value to display |
| format | string | Either '12' or '24' for time format |

### Example
<TimeDisplay hours="22" minutes="42" seconds="05" format="12" />

---

## StatRing
A circular progress indicator for fitness stats. Used 3 times with different props.

### Props
| Prop | Type | Description |
|-------|--------|------------------------------------------|
| label | string | The stat name shown below the value |
| value | string | The current value displayed |
| target | string | The goal value |
| color | string | Tailwind border color class for the ring |

### Example
<StatRing label="Steps" value="8,432" target="10,000" color="border-green-500" />

---

## StopwatchWidget
A stopwatch screen showing current time, lap times, and control buttons.

### Props
| Prop | Type | Description |
|-------------|------------|--------------------------------------|
| currentTime | string | Formatted elapsed time e.g. "01:23.45" |
| isRunning | boolean | Changes text to green when true |
| lapTimes | string[] | List of lap time strings to display only one lap time, Scrollable |
| onStart | () => void | Called when Start button is pressed |
| onStop | () => void | Called when Stop button is pressed |
| onReset | () => void | Called when Reset button is pressed |
| onLap | () => void | Called when Lap button is pressed |

### Example
<StopwatchWidget
  currentTime="01:23.45"
  isRunning={false}
  lapTimes={['00:58.20', '00:25.25']}
  onStart={() => {}}
  onStop={() => {}}
  onReset={() => {}}
  onLap={() => {}}
/>

---

## ModeToggle
A button that switches between clock and stopwatch view. Owns no state — delegates control to App.jsx.

### Props
| Prop | Type | Description |
|--------------|------------|--------------------------------------|
| currentMode | string | Either 'clock' or 'stopwatch' |
| onModeChange | (mode: string) => void | Called with the next mode on click |

### Example
<ModeToggle currentMode="clock" onModeChange={setCurrentMode} />