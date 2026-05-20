function StopwatchWidget({ currentTime, isRunning, lapTimes, onStart, onStop, onReset, onLap }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-xs text-gray-400 tracking-widest">STOPWATCH</span>
      <span className={`text-3xl font-bold ${isRunning ? 'text-green-400' : 'text-white'}`}>
        {currentTime}
      </span>
      <div className="flex gap-2 flex-wrap justify-center">
        {lapTimes.map((lap, index) => (
          <div key={index} className="bg-gray-800 rounded px-2 py-1 text-xs text-gray-300">
            LAP {index + 1} &nbsp; {lap}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
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