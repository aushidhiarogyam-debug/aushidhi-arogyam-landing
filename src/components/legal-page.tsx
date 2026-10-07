import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import logo from "../assets/logo.jpeg";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/70 bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Aushadhi Aarogyam logo" className="h-11 w-auto rounded-full" />
            <span className="font-serif text-sm font-bold text-foreground sm:text-base">
              Aushadhi Aarogyam Pvt. Ltd.
            </span>
          </Link>
          <Link to="/" className="text-sm font-medium text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-10 border-b border-border pb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Aushadhi Aarogyam Pvt. Ltd.
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: October 7, 2026</p>
          </div>
          <article className="space-y-9 text-[15px] leading-7 text-foreground/85">
            {children}
          </article>
        </div>
      </main>

      <footer className="border-t border-border bg-muted/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Aushadhi Aarogyam Pvt. Ltd.</span>
          <nav aria-label="Legal pages" className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-foreground">
              Terms of Use
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-xl font-bold leading-8 text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
