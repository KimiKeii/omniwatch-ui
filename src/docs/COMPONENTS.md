# OmniWatch Components

## WatchFrame
The outer shell styled like a physical smartwatch. Wraps all other components.

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
Shows the current time. Supports both 12hr and 24hr format.

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
A stopwatch screen showing current time and lap times.

### Props
| Prop | Type | Description |
|-------------|---------|--------------------------------------|
| currentTime | string | The stopwatch time to display |
| isRunning | boolean | Changes text to green when true |
| lapTimes | array | List of lap time strings to display |

### Example
<StopwatchWidget
  currentTime="01:23.45"
  isRunning={false}
  lapTimes={['00:58.20', '00:25.25']}
/>