function WatchFrame({ children }) {
  return (
    <div className="w-80 h-80 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center shadow-2xl">
      <div className="w-72 h-72 rounded-full bg-gray-900 flex flex-col items-center justify-center gap-2 p-6 overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default WatchFrame