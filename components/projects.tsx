"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Gestion des absences",
    description: "Une application de gestion des absences",
    tech: ["Laravel", "mysql"],
    link: "#",
    image: "/image.png",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    tech: ["Vue.js", "Express", "GraphQL"],
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md dark:shadow-white/10 mb-4 w-full h-auto"
                  />
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

