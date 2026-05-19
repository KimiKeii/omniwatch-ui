function WatchFrame({ children }) {
  return (
    <div className="w-64 h-80 rounded-[3rem] bg-gray-800 border-2 border-gray-700 flex items-center justify-center shadow-2xl">
      <div className="w-56 h-72 rounded-[2.5rem] bg-gray-900 flex flex-col items-center justify-center gap-4 p-4">
        {children}
      </div>
    </div>
  )
}

export default WatchFrame