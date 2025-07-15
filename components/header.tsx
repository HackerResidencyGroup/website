"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <Button asChild variant="default" size="sm">
        <Link href="/apply">
          Apply
        </Link>
      </Button>
      <ThemeToggle />
    </div>
  )
}