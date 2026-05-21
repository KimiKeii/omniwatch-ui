import WatchFrame from './components/WatchFrame'
import TimeDisplay from './components/TimeDisplay'
import StopwatchWidget from './components/StopwatchWidget'
import StatRing from './components/StatRing'
import ModeToggle from './components/ModeToggle'
import useAnimatedCounter from './hooks/useAnimatedCounter'
import { useState, useEffect, useCallback } from 'react'


function formatTime(cs) {
  const minutes = Math.floor(cs / 6000)
  const seconds = Math.floor((cs % 6000) / 100)
  const centiseconds = cs % 100
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`
}

function App() {
  const [currentMode, setCurrentMode] = useState('clock')
  const [timeFormat, setTimeFormat] = useState('12')

  const handleToggleTimeFormat = useCallback(() => {
    setTimeFormat(prevFormat => prevFormat === '12' ? '24' : '12')
  }, [])

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
      setElapsed(prev => prev + 1)
    }, 100)
    return () => clearInterval(interval)
  }, [isRunning])


  const handleStart = useCallback(() => setIsRunning(true), [])
  const handleStop = useCallback(() => setIsRunning(false), [])
  const handleReset = useCallback(() => {
    setIsRunning(false)
    setElapsed(0)
    setLapTimes([])
  }, [])
  const handleLap = useCallback(() => {
    setLapTimes(prev => [...prev, elapsed])
  }, [elapsed])

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase()

      if (key === ' ' || event.code === 'Space') {
        event.preventDefault()
        setIsRunning(prev => !prev)
      }

      if (key === 'l') {
        handleLap()
      }

      if (key === 'r') {
        handleReset()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleLap, handleReset])

  const [stats, setStats] = useState({
    steps: 8432,
    calories: 420,
    heartRate: 72,
  })

  const animatedSteps = useAnimatedCounter(stats.steps)
  const animatedCalories = useAnimatedCounter(stats.calories)
  const animatedHeartRate = useAnimatedCounter(stats.heartRate)

  const handleSyncStats = () => {
    setStats({
      steps: Math.floor(Math.random() * 7001) + 5000,
      calories: Math.floor(Math.random() * 601) + 200,
      heartRate: Math.floor(Math.random() * 53) + 58,
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = Math.floor(Math.random() * 10) - 5
      setStats(prev => ({
        ...prev,
        heartRate: Math.min(110, Math.max(58, prev.heartRate + delta))
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'radial-gradient(circle at center, #000000 0%, #0d0d0d 40%, #2d0a5e 75%, #6b21a8a1 190%)' }}>
      <WatchFrame>
        {/* Mode toggle */}
          <ModeToggle currentMode={currentMode} onModeChange={setCurrentMode} />

        {/* Clock mode */}
        {currentMode === 'clock' && (
          <TimeDisplay
            hours={time.getHours()}
            minutes={String(time.getMinutes()).padStart(2, '0')}
            seconds={String(time.getSeconds()).padStart(2, '0')}
            format={timeFormat}
            onToggleFormat={handleToggleTimeFormat}
          />
        )}

        {/* Stat rings — always visible */}
        <div className="flex gap-4">
          <StatRing label="Steps" value={animatedSteps.toLocaleString()} target="10,000" color="border-green-500" />
          <StatRing label="Calories" value={animatedCalories} target="600" color="border-orange-500" />
          <StatRing label="Heart Rate" value={animatedHeartRate} target="120" color="border-red-500" />
        </div>
        <button
          className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white mt-2"
          onClick={handleSyncStats}
        >
          ↺ SYNC STATS
        </button>

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