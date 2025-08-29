import { Code2 } from "lucide-react"

const codeSample = `
POST /v1/appointments
Authorization: Bearer <YOUR_TOKEN>
Content-Type: application/json

{
  "patient": { "id": "pat_123" },
  "provider": { "id": "doc_456" },
  "slot": { "start": "2025-09-01T09:30:00Z", "durationMins": 30 },
  "location": "Clinic A",
  "notifications": { "email": true, "sms": true }
}
`.trim()

export function ApiSection() {
  return (
    <section id="api" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-center gap-2">
          <Code2 size={20} className="text-primary" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Simple REST API</h2>
        </div>
        <p className="max-w-prose text-muted-foreground">
          Create, reschedule, and cancel appointments with idempotent endpoints. Webhooks notify your systems about
          lifecycle changes. SDKs available for JavaScript and Python.
        </p>
        <div className="mt-6 overflow-hidden rounded-lg bg-card ring-1 ring-border">
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-foreground">
            <code>{codeSample}</code>
          </pre>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          Authentication uses scoped tokens. Rotate keys and restrict by IP or environment.
        </div>
      </div>
    </section>
  )
}
