"use client"

import { useEffect, useRef, memo, Suspense } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useIsMobile } from "@/components/ui/use-mobile"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  suspense: true,
})

function HeroComponent() {
  const isMobile = useIsMobile()
  const splineRef = useRef<any>(null)

  const onLoad = (spline: any) => {
    splineRef.current = spline
  }

  useEffect(() => {
    // No-op
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      {isMobile ? (
        <Image
          src="/creative-agency-portfolio.png"
          alt="ByteFractal Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      ) : (
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Spline
            scene="https://prod.spline.design/a8sujCRKUTyXmacT/scene.splinecode"
            onLoad={onLoad}
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              display: "block",
            }}
          />
        </Suspense>
      )}
    </div>
  )
}

export default memo(HeroComponent)
