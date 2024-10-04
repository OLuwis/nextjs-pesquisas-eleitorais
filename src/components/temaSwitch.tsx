"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function TemaSwitch() {
  const { theme, setTheme } = useTheme()

  return theme === "light" ? (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-8 h-8"
      onClick={() => setTheme("dark")}
    >
      <MoonIcon className="h-4 w-4" />
    </Button>
  ) : (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-8 h-8"
      onClick={() => setTheme("light")}
    >
      <SunIcon className="h-4 w-4" />
    </Button>
  )
}