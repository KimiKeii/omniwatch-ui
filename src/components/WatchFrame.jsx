function WatchFrame({ children }) {
  return (
    <div className="w-90 h-90 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center shadow-2xl">
      <div className="w-82 h-82 rounded-full bg-gray-900 flex flex-col items-center justify-center gap-2 p-6 overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default WatchFrame