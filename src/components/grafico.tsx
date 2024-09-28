"use client"

import amostra from "@/commons/amostra.json";
import { Pesquisa } from "@/types/pesquisa";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Line, LineChart } from "recharts";
import { CartesianGrid, XAxis } from "recharts";
// import { ChartData, ChartDataset, Point, Chart, registerables, ScaleChartOptions } from "chart.js";
// import { Line } from "react-chartjs-2";
// import "chartjs-adapter-date-fns";

export default function Grafico() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="max-h-[324px] w-full">
      <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        <Line dataKey="mobile" type="natural" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  )
}

// Chart.register(...registerables)

// export default function Grafico() {
//   const dados = amostra.resultado.cenarios[0].data

//   const cores = dados.map(d => d.color)
//   const opcoes = dados.map(d => d.option)
//   const valoresIniciais = dados.map(d => d.values[0].value)
//   const valoresFinais = dados.map(d => d.values[1].value)
//   const datasIniciais = dados.map(d => d.values[0].date)
//   const datasFinais = dados.map(d => d.values[1].date)

//   const _dados: ChartDataset<"line", (number | Point | null)[]>[] = []

//   dados.forEach(d => _dados.push(
//     {
//       label: d.option,
//       data: [d.values[0].value * 100, d.values[1].value * 100],
//       backgroundColor: d.color,
//       borderColor: d.color
//     }
//   ))

//   const dataset: ChartData<"line", (number | Point | null)[], unknown> = {
//     labels: ["2024-08-27T00:00:00Z", "2024-09-17T00:00:00Z"],
//     datasets: _dados
//   }

//   return (
//     <div>
//       <Line data={dataset} options={{ interaction: { intersect: false, mode: "index" }, plugins: { title: { text: amostra.resultado.cenarios[0].bandeira, display: true }, tooltip: { callbacks: { title: ctx => "Datafolha - " + ctx[0].label, label: ctx => ctx.dataset.label + ": " + ctx.raw + "%" } } }, scales: { x: { type: "time", time: { unit: "day", displayFormats: { day: "dd/MM" }, tooltipFormat: "dd/MM/yyyy" }, ticks: { source: "labels" } } } }} />
//       {/* <p className="my-4">{"Cores: " + JSON.stringify(cores)}</p>
//       <p className="my-4">{"Opcoes: " + JSON.stringify(opcoes)}</p>
//       <p className="my-4">{"Datas Iniciais: " + JSON.stringify(datasIniciais)}</p>
//       <p className="my-4">{"Datas Finais: " + JSON.stringify(datasFinais)}</p>
//       <p className="my-4">{"Valores Iniciais: " + JSON.stringify(valoresIniciais)}</p>
//       <p className="my-4">{"Valores Finais: " + JSON.stringify(valoresFinais)}</p> */}
//     </div>
//   )
// }