function formatTime(cs) {
  const minutes = Math.floor(cs / 6000)
  const seconds = Math.floor((cs % 6000) / 100)
  const centiseconds = cs % 100
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`
}

function StopwatchWidget({ currentTime, isRunning, lapTimes, onStart, onStop, onReset, onLap }) {
  const lapDurations = lapTimes.map((time, index) => index === 0 ? time : time - lapTimes[index - 1])
  const fastestLap = lapDurations.length ? Math.min(...lapDurations) : null
  const slowestLap = lapDurations.length ? Math.max(...lapDurations) : null

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs text-gray-400 tracking-widest">STOPWATCH</span>
      <span className={`text-3xl font-bold ${isRunning ? 'text-green-400' : 'text-white'}`}>
        {currentTime}
      </span>
      <div className="flex flex-col gap-1 overflow-y-auto max-h-7 w-full px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {[...lapTimes].reverse().map((lap, index) => {
          const lapIndex = lapTimes.length - 1 - index
          const duration = lapDurations[lapIndex]
          const isFastest = duration === fastestLap
          const isSlowest = duration === slowestLap
          const itemClass = isFastest
            ? 'bg-emerald-700 text-emerald-200'
            : isSlowest
              ? 'bg-red-700 text-red-200'
              : 'bg-gray-800 text-gray-300'

          return (
            <div key={index} className={`${itemClass} rounded px-2 py-1 text-xs flex justify-between`}>
              <span>LAP {lapTimes.length - index}</span>
              <span>{formatTime(duration)}</span>
            </div>
          )
        })}
      </div>
      <div className="flex gap-2 mt-1">
        {isRunning ? (
          <button onClick={onStop} className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">■ STOP</button>
        ) : (
          <button onClick={onStart} className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">▶ START</button>
        )}
        <button onClick={onLap} className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">LAP</button>
        <button onClick={onReset} className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">↺</button>
      </div>
    </div>
  )
}

export default StopwatchWidget