import WatchFrame from './components/WatchFrame'
import TimeDisplay from './components/TimeDisplay'
import StopwatchWidget from './components/StopwatchWidget'
import StatRing from './components/StatRing'
import { useState, useEffect } from 'react'

function formatTime(cs) {
  const minutes = Math.floor(cs / 6000)
  const seconds = Math.floor((cs % 6000) / 100)
  const centiseconds = cs % 100
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`
}

function App() {
  const currentMode = 'stopwatch'

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const [elapsed, setElapsed] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [lapTimes, setLapTimes] = useState([])

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setElapsed(prev => prev + 10)
    }, 100)
    return () => clearInterval(interval)
  }, [isRunning])


  const handleStart = () => setIsRunning(true)
  const handleStop = () => setIsRunning(false)
  const handleReset = () => {
    setIsRunning(false)
    setElapsed(0)
    setLapTimes([])
  }
  const handleLap = () => {
    setLapTimes(prev => [...prev, formatTime(elapsed)])
  }

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
            currentTime={formatTime(elapsed)}
            isRunning={isRunning}
            lapTimes={lapTimes}
            onStart={handleStart}
            onStop={handleStop}
            onReset={handleReset}
            onLap={handleLap}
          />
        )}

      </WatchFrame>
    </div>
  )
}

export default App