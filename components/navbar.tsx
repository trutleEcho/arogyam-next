"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Arogyam Home">
          <span className="font-semibold tracking-tight text-foreground text-2xl">Arogyam</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#security" className="text-sm text-muted-foreground hover:text-foreground">
            Security
          </Link>
          {/*<Link href="#api" className="text-sm text-muted-foreground hover:text-foreground">*/}
          {/*  API*/}
          {/*</Link>*/}
          {/*<Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">*/}
          {/*  Pricing*/}
          {/*</Link>*/}
          <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground">
            Customers
          </Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {/*<Link href="#docs" className="text-sm text-muted-foreground hover:text-foreground">*/}
          {/*  Docs*/}
          {/*</Link>*/}
          <a href="/Arogyam-demo.apk" download>
            <Button>Demo</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
