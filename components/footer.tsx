import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-8">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Arogyam. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground" aria-label="Footer">
          <Link href="#docs" className="hover:text-foreground">
            Docs
          </Link>
          <Link href="#security" className="hover:text-foreground">
            Security
          </Link>
          <Link href="#pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="mailto:hello@arogyam.example" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
