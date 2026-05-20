function TimeDisplay({ hours, minutes, seconds, format, onToggleFormat }) {
  const displayHours = format === '12'
    ? (parseInt(hours, 10) % 12 || 12).toString().padStart(2, '0')
    : String(hours).padStart(2, '0')

  const period = format === '12'
    ? parseInt(hours, 10) >= 12 ? 'PM' : 'AM'
    : null

  const today = new Date()
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={onToggleFormat}
        className="text-white text-4xl font-bold tracking-tight hover:text-cyan-300 focus:outline-none"
      >
        <span>
          {displayHours}:{minutes}
          <span className="text-xl text-white">.{seconds}s</span>
          {format === '12' && (
            <span className="text-white"> {period}</span>
          )}
        </span>
      </button>
      <span className="text-gray-400 text-xs mt-1">
        {dateString}
      </span>
    </div>
  )
}

export default TimeDisplay