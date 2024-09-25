"use client"
import { useState } from "react"

export default function Seletor({ placeholder, opcoes }: { placeholder: string, opcoes: string[] }) {
  const [value, setValue] = useState(placeholder)

  return (
    <label>
      <select
        value={value}
        onChange={e => setValue(e.target.value)}
        className="font-sans rounded-md focus:border-current focus:ring-transparent"
      >
        <option disabled hidden>{placeholder}</option>
        {opcoes.map(o => (
          <option value={o} key={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}