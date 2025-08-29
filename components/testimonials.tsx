import { Quote } from "lucide-react"

const quotes = [
  {
    quote: "Arogyam helped us cut phone scheduling by 68% in the first month. Patients love the reminders.",
    author: "Dr. Meera S.",
    role: "Clinic Director, Sunrise Health",
  },
  {
    quote: "We integrated in a weekend. The webhooks and audit logs made compliance reviews painless.",
    author: "Arun Patel",
    role: "CTO, CareBridge",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-center gap-2">
          <Quote className="text-primary" size={20} aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">What customers say</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <figure key={q.author} className="rounded-lg bg-card p-6 ring-1 ring-border">
              <blockquote className="text-pretty italic text-foreground">“{q.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{q.author}</span> — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
