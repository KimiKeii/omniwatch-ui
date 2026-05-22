import { useState, useEffect } from 'react'
import useAnimatedCounter from './useAnimatedCounter'

export function useStats() {
  const [stats, setStats] = useState({
    steps: 8432,
    calories: 420,
    heartRate: 72,
  })

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

  const animatedSteps = useAnimatedCounter(stats.steps)
  const animatedCalories = useAnimatedCounter(stats.calories)
  const animatedHeartRate = useAnimatedCounter(stats.heartRate)

  return {
    animatedSteps,
    animatedCalories,
    animatedHeartRate,
    handleSyncStats,
  }
}