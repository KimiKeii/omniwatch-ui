function StopwatchWidget({ currentTime, isRunning, lapTimes, onStart, onStop, onReset, onLap }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs text-gray-400 tracking-widest">STOPWATCH</span>
      <span className={`text-3xl font-bold ${isRunning ? 'text-green-400' : 'text-white'}`}>
        {currentTime}
      </span>
      <div className="flex flex-col gap-1 overflow-y-auto max-h-7 w-full px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {[...lapTimes].reverse().map((lap, index) => (
          <div key={index} className="bg-gray-800 rounded px-2 py-1 text-xs text-gray-300 flex justify-between">
            <span>LAP {lapTimes.length - index}</span>
            <span>{lap}</span>
          </div>
        ))}
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