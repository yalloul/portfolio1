import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/innov.jpg"
              alt="Developer coding"
              width={300}
              height={300}
              className="rounded-lg shadow-lg dark:shadow-white/10 mx-auto"
            />
          </div>
          <div className="md:w-1/2 max-w-lg">
            <p className="mb-4">
              I'm a passionate full stack developer with experience in building scalable, secure and reliable web
              applications. I enjoy solving complex problems and learning new skills.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

