"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="text-center md:text-left md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm DevName</h1>
          <p className="text-xl md:text-2xl mb-8">
            A Full Stack Developer passionate about creating interactive applications and experiences on the web.
          </p>
          <Button asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/profilepic.jpg"
            alt="Developer at work"
            width={400}
            height={400}
            className="rounded-lg shadow-lg dark:shadow-white/10 mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

