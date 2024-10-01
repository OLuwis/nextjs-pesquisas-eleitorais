"use client"

import { Pesquisa } from "@/types/pesquisa"
import { criarConfig, criarDados } from "@/services/graficoService"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Line, LineChart, CartesianGrid, XAxis } from "recharts";
import { CSSProperties } from "react";

export default function Grafico({ pesquisa }: { pesquisa: Pesquisa }) {
  const dados = criarDados(pesquisa)
  const config = criarConfig(pesquisa)

  return (
    <ChartContainer config={config} className="max-h-[324px] w-full mt-6">
      <LineChart accessibilityLayer data={dados} margin={{ left: 18, right: 18 }}>
        <CartesianGrid vertical={false} />
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
              {config[name as keyof typeof config]?.label || name}
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
  )
}