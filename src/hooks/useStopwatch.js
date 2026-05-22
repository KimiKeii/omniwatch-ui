import { useReducer, useRef, useCallback } from 'react'
import { stopwatchReducer, initialState } from '../stopwatchReducer'

export function useStopwatch() {
  const [state, dispatch] = useReducer(stopwatchReducer, initialState)
  const intervalRef = useRef(null)
  const elapsedRef = useRef(0)

  const handleStart = useCallback(() => {
    dispatch({ type: 'START' })
    intervalRef.current = setInterval(() => {
      elapsedRef.current += 1
      dispatch({ type: 'TICK' })
    }, 10)
  }, [])

  const handleStop = useCallback(() => {
    dispatch({ type: 'STOP' })
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }, [])

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET' })
    clearInterval(intervalRef.current)
    intervalRef.current = null
    elapsedRef.current = 0
  }, [])

  const handleLap = useCallback(() => {
    dispatch({ type: 'LAP' })
  }, [])

  return {
    elapsed: state.elapsed,
    isRunning: state.isRunning,
    lapTimes: state.lapTimes,
    handleStart,
    handleStop,
    handleReset,
    handleLap,
  }
}