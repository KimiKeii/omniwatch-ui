function TimeDisplay({ hours, minutes, seconds, format }) {
  const displayHours = format === '12'
    ? (parseInt(hours) % 12 || 12).toString().padStart(2, '0')
    : hours

  const period = format === '12'
    ? parseInt(hours) >= 12 ? 'PM' : 'AM'
    : null

  return (
    <div className="flex flex-col items-center">
      <span className="text-white text-4xl font-bold tracking-tight">
        {displayHours}:{minutes}
      </span>
      <span className="text-gray-400 text-xs mt-1">
        {period && <span>{period} · </span>}
        {seconds}s
      </span>
    </div>
  )
}

export default TimeDisplay