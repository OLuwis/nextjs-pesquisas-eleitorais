"use client"

import { Pesquisa } from "@/types/pesquisa";
import { criarConfig, criarDados } from "@/services/graficoService";
import { localNormalizer } from "@/services/pesquisaServices"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, CartesianGrid, XAxis } from "recharts";
import { CSSProperties } from "react";

export default function Grafico({ pesquisa, params }: { pesquisa: Pesquisa, params: { local: string, instituto: "datafolha" | "quaest" } }) {
  const local = params.local
  const instituto = params.instituto
  const graficoDados = criarDados(pesquisa)
  const graficoConfig = criarConfig(pesquisa)
  const localeConfig: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }

  return (
    <Card className="mt-2 mx-auto border-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl">1º Turno - {localNormalizer(local)} ({instituto.replace(/^./, instituto[0].toUpperCase())})</CardTitle>
        <CardDescription className="text-center">
          {graficoDados[2] ?
            new Date(graficoDados[0]["date"] as Date).toLocaleDateString("pt-br", localeConfig) + " - " + new Date(graficoDados[2]["date"] as Date).toLocaleDateString("pt-br", localeConfig) :
            graficoDados[1] ?
              new Date(graficoDados[0]["date"] as Date).toLocaleDateString("pt-br", localeConfig) + " - " + new Date(graficoDados[1]["date"] as Date).toLocaleDateString("pt-br", localeConfig) :
              new Date(graficoDados[0]["date"] as Date).toLocaleDateString("pt-br", localeConfig)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={graficoConfig} className="h-[300px] w-full">
          <LineChart accessibilityLayer data={graficoDados} margin={{ left: 18, right: 18 }}>
            <CartesianGrid />
            <XAxis
              dataKey="date"
              tickMargin={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => {
                return new Date(v).toLocaleDateString("pt-BR", {
                  month: "numeric",
                  day: "numeric"
                })
              }}
            />
            <ChartTooltip content={<ChartTooltipContent
              formatter={(value, name) => (
                <>
                  <div
                    className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg] mt-1"
                    style={
                      {
                        "--color-bg": `var(--color-${name})`
                      } as CSSProperties
                    }
                  />
                  {graficoConfig[name as keyof typeof graficoConfig]?.label || name}
                  <div className="ml-auto flex items-baseline font-mono font-medium tabular-nums text-foreground">
                    {value}
                    <span className="font-normal text-muted-foreground">
                      %
                    </span>
                  </div>
                </>
              )}
              labelFormatter={(value) => {
                return "1º Turno - " + new Date(value).toLocaleDateString("pt-BR", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric"
                })
              }}
              indicator="line"
            />} />
            <ChartLegend content={<ChartLegendContent />} />
            {pesquisa.resultado.cenarios[0].data.map(d => (
              <Line
                dataKey={d.option.replace(/[^a-zA-Z0-9]/g, "")}
                type="linear"
                stroke={`var(--color-${d.option.replace(/[^a-zA-Z0-9]/g, "")})`}
                strokeWidth={2}
                dot={{
                  fill: `var(--color-${d.option.replace(/[^a-zA-Z0-9]/g, "")})`,
                  r: 2
                }}
                key={d.option.replace(/[^a-zA-Z0-9]/g, "")} />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}