import { useState, useEffect, useCallback } from 'react'
import { useWatch } from './context/WatchContext'
import { useStopwatch } from './hooks/useStopwatch'
import { useStats } from './hooks/useStats'
import WatchFrame from './components/WatchFrame'
import TimeDisplay from './components/TimeDisplay'
import StopwatchWidget from './components/StopwatchWidget'
import StatRing from './components/StatRing'
import ModeToggle from './components/ModeToggle'

function formatTime(cs) {
  const minutes = Math.floor(cs / 6000)
  const seconds = Math.floor((cs % 6000) / 100)
  const centiseconds = cs % 100
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`
}

function App() {
  const [currentMode, setCurrentMode] = useState('clock')
  const { timeFormat, setTimeFormat } = useWatch()

  const handleToggleTimeFormat = useCallback(() => {
    setTimeFormat(prev => prev === '12' ? '24' : '12')
  }, [setTimeFormat])

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const { elapsed, isRunning, lapTimes, handleStart, handleStop, handleReset, handleLap } = useStopwatch()
  const { animatedSteps, animatedCalories, animatedHeartRate, handleSyncStats } = useStats()

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase()
      if (key === ' ' || event.code === 'Space') {
        event.preventDefault()
        if (isRunning) {
          handleStop()
        } else {
          handleStart()
        }
      }
      if (key === 'l') handleLap()
      if (key === 'r') handleReset()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleLap, handleReset, handleStart, handleStop, isRunning])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'radial-gradient(circle at center, #000000 0%, #0d0d0d 40%, #2d0a5e 75%, #6b21a8a1 190%)' }}>
      <WatchFrame>
        <ModeToggle currentMode={currentMode} onModeChange={setCurrentMode} />
        {currentMode === 'clock' && (
          <TimeDisplay
            hours={time.getHours()}
            minutes={String(time.getMinutes()).padStart(2, '0')}
            seconds={String(time.getSeconds()).padStart(2, '0')}
            format={timeFormat}
            onToggleFormat={handleToggleTimeFormat}
          />
        )}
        <div className="flex gap-4">
          <StatRing label="Steps" value={animatedSteps.toLocaleString()} target="10,000" color="border-green-500" />
          <StatRing label="Calories" value={animatedCalories.toLocaleString()} target="600" color="border-orange-500" />
          <StatRing label="Heart Rate" value={animatedHeartRate.toLocaleString()} target="120" color="border-red-500" />
        </div>
        <button
          className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white mt-2"
          onClick={handleSyncStats}
        >
          ↺ SYNC STATS
        </button>
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