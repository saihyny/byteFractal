"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const usePageAnimations = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    gsap.registerPlugin(ScrollTrigger)

    const heroSection = document.querySelector(".hero-sticky")

    if (heroSection) {
      ScrollTrigger.create({
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        pin: heroSection,
        pinSpacing: false,
        scrub: true,
        invalidateOnRefresh: true,
      })
    }

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.utils.toArray<HTMLElement>(".content-sections section").forEach((section) => {
          gsap.fromTo(
            section,
            { autoAlpha: 0, y: 80 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              willChange: "transform, opacity",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            },
          )
        })
      },
      "(max-width: 767px)": function () {
        gsap.utils.toArray<HTMLElement>(".content-sections section").forEach((section) => {
          gsap.fromTo(
            section,
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              duration: 1,
              ease: "power3.out",
              willChange: "opacity",
              scrollTrigger: {
                trigger: section,
                start: "top 95%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            },
          )
        })
      },
    })
  }, [isMounted])
}
