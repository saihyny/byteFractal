"use client"

import { useState, useEffect } from "react"

export const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50) // Update progress every 50ms to reach 100% in 5s

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-black">
      <div className="w-1/2">
        <div className="text-white text-5xl font-bold text-center mb-2">
          {progress}%
        </div>
        <div className="w-full bg-gray-700 rounded-full h-1.5">
          <div
            className="bg-blue-500 h-1.5 rounded-full"
            style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
          ></div>
        </div>
        <div className="text-white text-center mt-2">Loading...</div>
      </div>
    </div>
  )
}