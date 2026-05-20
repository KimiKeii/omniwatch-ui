function TimeDisplay({ hours, minutes, seconds, format }) {
  const displayHours = format === '12'
    ? (parseInt(hours) % 12 || 12).toString().padStart(2, '0')
    : hours

  const period = format === '12'
    ? parseInt(hours) >= 12 ? 'PM' : 'AM'
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
      <span className="text-white text-4xl font-bold tracking-tight">
        {displayHours}:{minutes}<span className="text-xl text-white">.{seconds}s</span> {period}
      </span>
      <span className="text-gray-400 text-xs mt-1">
        {dateString}
      </span>
    </div>
  )
}

export default TimeDisplay