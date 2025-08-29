import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:gap-12 md:py-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-primary">
            <span className="text-xs font-medium">HIPAA-ready</span>
            <span aria-hidden>•</span>
            <span className="text-xs">SOC 2 controls</span>
          </div>
          <h1 className="text-pretty text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Arogyam — Doctor Appointment Management IaaS
          </h1>
          <p className="max-w-prose text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Launch reliable, secure appointment workflows for clinics and hospitals. Arogyam provides scheduling,
            patient communications, provider availability, and audit-ready logs as a service.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="/Arogyam-demo.apk" download>
              <Button>Demo</Button>
            </a>
            {/*<Link*/}
            {/*  href="#api"*/}
            {/*  className="inline-flex items-center justify-center rounded border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"*/}
            {/*>*/}
            {/*  View API*/}
            {/*</Link>*/}
          </div>
          <dl className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs text-muted-foreground">Uptime</dt>
              <dd className="text-lg font-semibold text-foreground">99.95%</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Requests / mo</dt>
              <dd className="text-lg font-semibold text-foreground">100M+</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Regions</dt>
              <dd className="text-lg font-semibold text-foreground">Global</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-border">
            <Image
              src={"/placeholder.svg?height=600&width=800&query=Mock%20Arogyam%20dashboard%20scheduling%20calendar"}
              alt="Arogyam dashboard preview showing a scheduling calendar"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Sample dashboard — provider availability, appointment slots, reminders
          </p>
        </div>
      </div>
    </section>
  )
}
