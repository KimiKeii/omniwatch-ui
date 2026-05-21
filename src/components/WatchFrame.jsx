function WatchFrame({ children }) {
  return (
    <div className="w-90 h-90 rounded-full bg-gray-800 border-4 border-violet-700 flex items-center justify-center shadow-2xl">
      <div className="w-82 h-82 rounded-full bg-gray-900 border-violet-500 border-2 flex flex-col items-center justify-center gap-1 p-4 overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default WatchFrame