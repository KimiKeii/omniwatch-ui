function ModeToggle({ currentMode, onModeChange }) {
  const nextMode = currentMode === 'clock' ? 'stopwatch' : 'clock'
  const label = currentMode === 'clock' ? 'Stopwatch ▶' : '◀ Clock'

  return (
    <button
      className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-200 mb-2"
      onClick={() => onModeChange(nextMode)}
    >
      {label}
    </button>
  )
}

export default ModeToggle