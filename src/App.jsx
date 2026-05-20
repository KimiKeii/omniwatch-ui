import WatchFrame from './components/WatchFrame'
import TimeDisplay from './components/TimeDisplay'
import StopwatchWidget from './components/StopwatchWidget'
import StatRing from './components/StatRing'
import { useState, useEffect } from 'react'

function App() {
  // Change this to 'clock' or 'stopwatch' to switch screens
  const currentMode = 'clock'
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <WatchFrame>

        {/* Clock mode */}
        {currentMode === 'clock' && (
          <TimeDisplay
            hours={time.getHours()}
            minutes={String(time.getMinutes()).padStart(2, '0')}
            seconds={String(time.getSeconds()).padStart(2, '0')}
            format="12"
          />
        )}

        {/* Stat rings — always visible */}
        <div className="flex gap-4">
          <StatRing label="Steps" value="8,432" target="10,000" color="border-green-500" />
          <StatRing label="Calories" value="420" target="600" color="border-orange-500" />
          <StatRing label="Heart Rate" value="72" target="120" color="border-red-500" />
        </div>

        {/* Stopwatch mode */}
        {currentMode === 'stopwatch' && (
          <StopwatchWidget
            currentTime="01:23.45"
            isRunning={false}
            lapTimes={['00:58.20', '00:25.25']}
          />
        )}

      </WatchFrame>
    </div>
  )
}

export default App