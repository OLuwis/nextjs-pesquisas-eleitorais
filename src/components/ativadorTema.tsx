"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function AtivadorTema() {
  const { theme, setTheme } = useTheme()

  return theme === "light" ? (
    <Button variant="outline" size="icon" className="rounded-full" onClick={() => setTheme("dark")}>
      <MoonIcon className="h-6 w-6" />
    </Button>
  ) : (
    <Button variant="outline" size="icon" className="rounded-full" onClick={() => setTheme("light")}>
      <SunIcon className="h-6 w-6" />
    </Button>
  )
}