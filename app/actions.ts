"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  // Here you would typically send an email or save to a database
  // For this example, we'll just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}

