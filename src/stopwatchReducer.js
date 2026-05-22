const initialState = {
  isRunning: false,
  elapsed: 0,
  lapTimes: [],
}

function stopwatchReducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true }
    case 'STOP':
      return { ...state, isRunning: false }
    case 'TICK':
      return { ...state, elapsed: state.elapsed + 1 }
    case 'LAP':
      return { ...state, lapTimes: [...state.lapTimes, state.elapsed] }
    case 'RESET':
      return { ...initialState }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export { stopwatchReducer, initialState }