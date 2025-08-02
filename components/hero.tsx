"use client"

import { memo, useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { useIsMobile } from "@/components/ui/use-mobile"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Spline from "@splinetool/react-spline"
import { LoadingAnimation } from "./ui/loading-animation"

function HeroComponent() {
  const isMobile = useIsMobile()
  const [isLoading, setIsLoading] = useState(true)
  const [showImage, setShowImage] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile || !heroRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "1% top",
      onEnter: () => setShowImage(true),
      onLeaveBack: () => setShowImage(false),
    })
  }, [isMobile])

  const handleSplineLoad = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden hero-sticky"
    >
      {isLoading && <LoadingAnimation />}
      {showImage ? (
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <div className="absolute inset-0 h-full w-full">
          <Suspense fallback={null}>
            <Spline
              scene="https://prod.spline.design/a8sujCRKUTyXmacT/scene.splinecode"
              onLoad={handleSplineLoad}
            />
          </Suspense>
        </div>
      )}
    </div>
  )
}

export default memo(HeroComponent)
