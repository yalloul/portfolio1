"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions"

export default function Contact() {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)

    const formData = new FormData(event.currentTarget)
    const response = await submitContactForm(formData)

    setIsPending(false)

    if (response.success) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      event.currentTarget.reset()
    } else {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <motion.form
          className="max-w-md mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <Input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <Input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <Textarea name="message" placeholder="Your Message" required />
          </div>
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

