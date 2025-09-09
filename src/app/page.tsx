import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-primary/10 grid place-items-center">
              <span className="text-primary font-bold">QB</span>
            </div>
            <span className="font-semibold tracking-tight">QuickBill</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it works</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full">Invoice Maker</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Create, send, and manage invoices with ease
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-prose">
              Design professional invoices in seconds. Automate totals, taxes, and branding. Share live links or export to PDF — all from one sleek dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg">Create your first invoice</Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">See a live demo</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                <Image src="/next.svg" alt="avatar" width={28} height={28} className="rounded-full border bg-background p-1" />
                <Image src="/vercel.svg" alt="avatar" width={28} height={28} className="rounded-full border bg-background p-1" />
                <div className="size-7 rounded-full border bg-muted grid place-items-center text-[10px]">+9k</div>
              </div>
              <span>Trusted by freelancers and startups</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-primary/10 blur-3xl rounded-full" />
            <div className="rounded-2xl border bg-card shadow-sm">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <div className="size-2 rounded-full bg-emerald-500" />
                  <span className="text-muted-foreground">Preview</span>
                </div>
                <Button size="sm" variant="outline">Export PDF</Button>
              </div>
              <div className="p-6 grid gap-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">FROM</p>
                    <p className="font-medium">QuickBill LLC</p>
                    <p className="text-sm text-muted-foreground">hello@quickbill.app</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-xs text-muted-foreground">INVOICE</p>
                    <p className="font-semibold">#000123</p>
                    <p className="text-sm text-muted-foreground">Due: 30 Apr 2025</p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-12 text-xs text-muted-foreground">
                    <span className="col-span-6">Item</span>
                    <span className="col-span-2 text-right">Qty</span>
                    <span className="col-span-2 text-right">Rate</span>
                    <span className="col-span-2 text-right">Amount</span>
                  </div>
                  <div className="h-px bg-border" />
                  {[1,2,3].map((i) => (
                    <div key={i} className="grid grid-cols-12 text-sm items-center">
                      <span className="col-span-6 truncate">Design Service</span>
                      <span className="col-span-2 text-right">1</span>
                      <span className="col-span-2 text-right">$120.00</span>
                      <span className="col-span-2 text-right">$120.00</span>
                    </div>
                  ))}
                </div>
                <div className="grid gap-2 pt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$360.00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>$36.00</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between text-base font-medium">
                    <span>Total</span>
                    <span>$396.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-8">
          {[
            { title: "Fast invoicing", desc: "Create invoices in seconds with smart defaults and templates." },
            { title: "Branding control", desc: "Customize logos, colors, and fields to match your brand." },
            { title: "Share & export", desc: "Send live links or export beautiful PDFs with one click." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="relative border-t">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to bill smarter</h2>
            <p className="text-muted-foreground">Start free. Upgrade when you need advanced features like saved clients, taxes, and PDF branding.</p>
            <div className="flex gap-3">
              <Button size="lg">Start free</Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Compare features</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Starter</p>
                <p className="text-4xl font-semibold">$0</p>
              </div>
              <Badge variant="secondary">No credit card</Badge>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-500" /> Unlimited invoices</li>
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-500" /> PDF export</li>
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-500" /> Live share links</li>
              <li className="flex items-center gap-2 text-muted-foreground"><span className="size-1.5 rounded-full bg-muted-foreground/40" /> Custom branding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} QuickBill. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
