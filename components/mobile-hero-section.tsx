"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const MobileHeroSection = () => {
  return (
    <div className="relative bg-black text-white h-screen w-full flex flex-col justify-center items-center p-4">
      {/* <div className="absolute top-4 left-4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M2 7L12 12L22 7"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 12V22"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div> */}
      <div className="w-full max-w-md text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Digital Experiences, Beautifully Crafted
        </h1>
        <p className="text-gray-400 mb-8">
          We create stunning and effective websites tailored to your needs. Join our waitlist to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Input
            type="email"
            placeholder="jane@example.com"
            className="bg-gray-800 border-gray-700 text-white flex-grow"
          />
          <Button className="bg-white text-black font-bold">
            Join Waitlist
          </Button>
        </div>
        <div className="flex items-center">
          <div className="flex -space-x-2">
            <Image
              src="/placeholder-user.jpg"
              alt="User 1"
              width={32}
              height={32}
              className="rounded-full border-2 border-black"
            />
            <Image
              src="/placeholder-user.jpg"
              alt="User 2"
              width={32}
              height={32}
              className="rounded-full border-2 border-black"
            />
            <Image
              src="/placeholder-user.jpg"
              alt="User 3"
              width={32}
              height={32}
              className="rounded-full border-2 border-black"
            />
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
              +27k
            </div>
          </div>
          <p className="text-gray-500 text-sm ml-4">
            Over 27,978+ people have already joined.
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} ByteFractal. All rights reserved.
      </div>
    </div>
  )
}

export default MobileHeroSection