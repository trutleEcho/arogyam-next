import { CheckCircle2, Lock, FileCheck2 as FileShield2 } from "lucide-react"

export function Security() {
  return (
    <section id="security" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-primary">
              <FileShield2 size={16} aria-hidden />
              <span className="text-xs font-medium">Compliance & Trust</span>
            </div>
            <h2 className="mt-4 text-pretty text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Built for regulated healthcare environments
            </h2>
            <p className="mt-3 text-muted-foreground">
              Arogyam is designed with healthcare best practices: least-privilege access, encryption at rest (AES-256)
              and in transit (TLS 1.2+), event auditing, and configurable data retention.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 text-primary" size={18} aria-hidden /> HIPAA-ready data handling
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 text-primary" size={18} aria-hidden /> SOC 2 aligned controls
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 text-primary" size={18} aria-hidden /> Signed webhooks & rotating
                secrets
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 text-primary" size={18} aria-hidden /> Role-based access and scoped
                tokens
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-card p-6 ring-1 ring-border">
            <div className="flex items-center gap-2">
              <Lock className="text-primary" size={20} aria-hidden />
              <h3 className="text-sm font-semibold text-foreground">Data Security Snapshot</h3>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Encryption at rest</dt>
                <dd className="font-medium text-foreground">AES-256</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">In transit</dt>
                <dd className="font-medium text-foreground">TLS 1.2+</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Data residency</dt>
                <dd className="font-medium text-foreground">Regional</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Audit Events</dt>
                <dd className="font-medium text-foreground">All mutations</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">
              Note: Compliance posture can vary by plan and region. Contact us for BAA and attestations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
