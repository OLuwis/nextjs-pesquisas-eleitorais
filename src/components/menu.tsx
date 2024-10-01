"use client"

import Link from "next/link";
import { useState } from "react";
import fontes from "@/commons/fontes.json";
import { Label } from "@/components/ui/label";
import { localNormalizer } from "@/services/pesquisaServices"
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Menu({ params }: { params?: { local: string, instituto: string } }) {
  const [local, setLocal] = useState<string | undefined>(params ? localNormalizer(params.local) : undefined)
  const [instituto, setInstituto] = useState<string | undefined>(params?.instituto.replace(/^./, params.instituto[0].toUpperCase()) || undefined)

  return (
    <Card className="w-max m-auto">
      <CardHeader>
        <CardTitle>Parciais - 1º Turno</CardTitle>
        <CardDescription>Visualize as parciais do 1º turno das eleições de 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label>Locais</Label>
            <Select value={local} onValueChange={(v) => { setLocal(v); setInstituto("") }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um local" />
              </SelectTrigger>
              <SelectContent>
                {fontes.map(({ local }) => <SelectItem value={local} key={local}>{local}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Institutos</Label>
            <Select value={instituto} onValueChange={(v) => setInstituto(v)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um instituto" />
              </SelectTrigger>
              <SelectContent>
                {local
                  ?
                  fontes.find(f => f.local === local)!.links.datafolha
                    ?
                    ["Datafolha", "Quaest"].map(instituto => <SelectItem value={instituto} key={instituto}>{instituto}</SelectItem>)
                    :
                    <SelectItem value={"Quaest"}>{"Quaest"}</SelectItem>
                  :
                  <SelectItem value="_" disabled>{"Nenhuma capital selecionada"}</SelectItem>}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link className={`${buttonVariants()} w-full px-4`} href={instituto && local ? `/${local.replaceAll(" ", "-").toLowerCase()}/${instituto.toLowerCase()}` : "/"}>Ver Resultados</Link>
      </CardFooter>
    </Card>
  )
}