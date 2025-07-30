"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"

export const useServicePageAnimations = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    gsap.fromTo(
      ".service-card",
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        willChange: "transform, opacity",
      }
    )
  }, [isMounted])
}
