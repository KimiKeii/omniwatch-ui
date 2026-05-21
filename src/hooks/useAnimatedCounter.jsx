import { useEffect, useRef, useState } from 'react'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function useAnimatedCounter(targetValue, duration = 800) {
  const [currentValue, setCurrentValue] = useState(targetValue)
  const currentValueRef = useRef(targetValue)
  const startValueRef = useRef(targetValue)
  const animationFrameRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (currentValueRef.current === targetValue) {
      setCurrentValue(targetValue)
      return
    }

    startValueRef.current = currentValueRef.current
    startTimeRef.current = null

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = clamp(elapsed / duration, 0, 1)
      const nextValue = Math.round(startValueRef.current + (targetValue - startValueRef.current) * progress)
      currentValueRef.current = nextValue
      setCurrentValue(nextValue)

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = window.requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [targetValue, duration])

  return currentValue
}
