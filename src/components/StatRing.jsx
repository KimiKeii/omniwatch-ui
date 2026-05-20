function StatRing({ label, value, target, color }) {
  return (
    <div className={`w-16 h-16 rounded-full bg-gray-800 border-4 ${color} flex items-center justify-center`}>
      <div className="w-10 h-10 rounded-full bg-gray-900 flex flex-col items-center justify-center">
        <span className="text-white text-xs font-bold">{value}</span>
        <span className="text-gray-400 text-[9px]">{label}</span>
      </div>
    </div>
  )
}

export default StatRing