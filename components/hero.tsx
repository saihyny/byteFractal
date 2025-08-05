"use client"

import { memo, useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Suspense } from "react"
import { useIsMobile } from "@/components/ui/use-mobile"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Spline from "@splinetool/react-spline"
import { LoadingAnimation } from "./ui/loading-animation"
import ByteFractalHero from "./mobile-hero-section"

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger)

function HeroComponent() {
  const isMobile = useIsMobile()
  const [isLoading, setIsLoading] = useState(true)
  const [showImage, setShowImage] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile || !heroRef.current) return

    // Set up ScrollTrigger only on desktop
    const scrollTrigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "1% top",
      onEnter: () => setShowImage(true),
      onLeaveBack: () => setShowImage(false),
    })

    // Cleanup
    return () => {
      scrollTrigger.kill()
    }
  }, [isMobile])

  const handleSplineLoad = () => {
    // Delay hiding loading animation to ensure smooth transition
    setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Adjust timing as needed
  }

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden hero-sticky">
      {/* Always show loading during initial load */}
      { !isMobile && isLoading && <LoadingAnimation />}

      {isMobile ? (
        <ByteFractalHero />
      ) : (
        // Desktop: Conditionally show image or Spline based on scroll
        showImage ? (
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/hero-image.png"
              alt="Hero Image"
              fill
              style={{ objectFit: "cover" }}
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
        )
      )}
    </div>
  )
}

export default memo(HeroComponent)