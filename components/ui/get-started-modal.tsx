import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./dialog"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"

interface GetStartedModalProps {
  isOpen: boolean
  onClose: () => void
  packageName?: string
  packagePrice?: string | number
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  packageName,
  packagePrice,
}) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = () => {
    const message = `Hello, I'm ${name}. I need a website for our needs. I chose the ${packageName} plan for ₹${packagePrice} to build an application for my requirement.`
    const whatsappUrl = `https://wa.me/916301762126?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-white">Get Started</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-gray-400">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="col-span-3 bg-gray-900 border-gray-700 text-white"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right text-gray-400">
              Phone Number
            </Label>
            <Input
              id="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="col-span-3 bg-gray-900 border-gray-700 text-white"
            />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Our team members will call you for further assistance.
        </p>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-white text-black hover:bg-gray-200"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default GetStartedModal
