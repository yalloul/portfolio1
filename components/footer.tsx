export default function Footer() {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-secondary-foreground">&copy; {new Date().getFullYear()} DevName. All rights reserved.</p>
      </div>
    </footer>
  )
}

