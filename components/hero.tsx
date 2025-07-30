"use client"

import { memo, useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { useIsMobile } from "@/components/ui/use-mobile"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  suspense: true,
})

function HeroComponent() {
  const isMobile = useIsMobile()
  const [showImage, setShowImage] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const splineRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile || !heroRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "80% top",
      end: "20% top",
      scrub: true,
      onEnter: () => setShowImage(true),
      onLeaveBack: () => setShowImage(false),
      onUpdate: (self) => {
        if (splineRef.current) {
          gsap.to(splineRef.current, { autoAlpha: 1 - self.progress, duration: 0 })
        }
        if (imageRef.current) {
          gsap.to(imageRef.current, { autoAlpha: self.progress, duration: 0 })
        }
      },
    })
  }, [isMobile])

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden hero-sticky">
        <>
          <div ref={splineRef} className="absolute inset-0 w-full h-full">
            <Suspense fallback={<div className="w-full h-full bg-black" />}>
              {!showImage && <Spline scene="https://prod.spline.design/a8sujCRKUTyXmacT/scene.splinecode" />}
            </Suspense>
          </div>
        </>
     
    </div>
  )
}

export default memo(HeroComponent)
