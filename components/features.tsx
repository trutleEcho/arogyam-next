import { Calendar, Users, Shield, BarChart3, Bell, Link2 } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    desc: "Provider availability, slot rules, buffer times, and no-overlap guarantees.",
  },
  {
    icon: Users,
    title: "Patient & Provider",
    desc: "Unified profiles with consent tracking and audit trails.",
  },
  {
    icon: Shield,
    title: "Security by Default",
    desc: "Encryption in transit and at rest, signed webhooks, role-based access.",
  },
  {
    icon: BarChart3,
    title: "Operational Analytics",
    desc: "Throughput, no-show rates, conversion funnels, and cohort reports.",
  },
  {
    icon: Bell,
    title: "Reminders & Comms",
    desc: "SMS/email reminders, confirmations, and follow-ups with templates.",
  },
  {
    icon: Link2,
    title: "Easy Integrations",
    desc: "REST and Webhooks. Connect to EHR/EMR systems and CRMs.",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 max-w-xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Everything you need to run appointments at scale
          </h2>
          <p className="mt-3 text-muted-foreground">
            Arogyam abstracts scheduling complexity so you can focus on care, not infrastructure.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg bg-card/50 ring-1 ring-border p-5 transition hover:bg-card hover:shadow-sm"
            >
              <div className="mb-3 inline-flex rounded-md bg-primary/5 p-2 text-primary" aria-hidden>
                <f.icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
