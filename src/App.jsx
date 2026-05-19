import StatRing from './components/StatRing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      
      {/* Watch Body */}
      <div className="w-64 h-80 rounded-[3rem] bg-gray-800 border-2 border-gray-700 flex items-center justify-center shadow-2xl">
        
        {/* Screen */}
        <div className="w-56 h-72 rounded-[2.5rem] bg-gray-900 flex flex-col items-center justify-center gap-4 p-4">
          
          {/* Time */}
          <div className="flex flex-col items-center">
            <span className="text-white text-4xl font-bold">10:42 AM</span>
            <span className="text-gray-400 text-xs mt-1">05s · 12hr mode</span>
          </div>

          {/* Stat Rings */}
          <div className="flex gap-4">

            {/* Steps */}
             <StatRing label="Steps" value="8,432" target="10,000" color="border-green-500" />

            {/* Calories */}
            <StatRing label="Calories" value="420" target="600" color="border-orange-500" />

            {/* Heart Rate */}
            <StatRing label="Heart Rate" value="72" target="120" color="border-red-500" />

          </div>

          {/* Stopwatch */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 tracking-widest">STOPWATCH</span>
            <span className="text-white text-3xl font-bold">01:23.45</span>
            <div className="flex gap-2">
              <div className="bg-gray-800 rounded px-2 py-1 text-xs text-gray-300">LAP 1 00:58.20</div>
              <div className="bg-gray-800 rounded px-2 py-1 text-xs text-gray-300">LAP 2 00:25.25</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App