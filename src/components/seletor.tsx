"use client"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function Seletor({ placeholder, opcoes }: { placeholder: string, opcoes: string[] }) {
  const [value, setValue] = useState(placeholder)

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {opcoes.map(o => <SelectItem value={o} key={o}>{o}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}