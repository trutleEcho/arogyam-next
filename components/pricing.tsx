import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Developer",
    price: "Free",
    desc: "Build and test",
    features: ["10k requests / mo", "Sandbox region", "Test webhooks", "Community support"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Team",
    price: "$299/mo",
    desc: "Go to production",
    features: ["3M requests / mo", "Prod regions", "Signed webhooks", "Email support"],
    cta: "Start Team",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Scale with confidence",
    features: ["Custom limits", "BAA & SSO", "SLA & support", "Data residency"],
    cta: "Contact Sales",
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Straightforward pricing
          </h2>
          <p className="mt-3 text-muted-foreground">Only pay for what you need. Upgrade as you grow.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={p.highlight ? "ring-1 ring-primary" : "ring-1 ring-border"}>
              <CardHeader>
                <CardTitle className="text-foreground">{p.name}</CardTitle>
                <div className="text-2xl font-semibold text-foreground">{p.price}</div>
                <div className="text-sm text-muted-foreground">{p.desc}</div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 text-primary" size={18} aria-hidden />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{p.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Usage beyond plan limits billed per million requests. Contact us for committed-use discounts.
        </p>
      </div>
    </section>
  )
}
