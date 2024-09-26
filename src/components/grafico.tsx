"use client"

import amostra from "@/commons/amostra.json";
import { Pesquisa } from "@/types/pesquisa";
import { ChartData, ChartDataset, Point, Chart, registerables, ScaleChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

Chart.register(...registerables)

export default function Grafico() {
  const dados = amostra.resultado.cenarios[0].data

  const cores = dados.map(d => d.color)
  const opcoes = dados.map(d => d.option)
  const valoresIniciais = dados.map(d => d.values[0].value)
  const valoresFinais = dados.map(d => d.values[1].value)
  const datasIniciais = dados.map(d => d.values[0].date)
  const datasFinais = dados.map(d => d.values[1].date)

  const _dados: ChartDataset<"line", (number | Point | null)[]>[] = []

  dados.forEach(d => _dados.push(
    {
      label: d.option,
      data: [d.values[0].value * 100, d.values[1].value * 100],
      backgroundColor: d.color,
      borderColor: d.color
    }
  ))

  const dataset: ChartData<"line", (number | Point | null)[], unknown> = {
    labels: ["2024-08-27T00:00:00Z", "2024-09-17T00:00:00Z"],
    datasets: _dados
  }

  return (
    <div>
      <Line data={dataset} options={{ interaction: { intersect: false, mode: "index" }, plugins: { tooltip: { callbacks: { label: ctx => ctx.dataset.label + ": " + ctx.raw + "%" } } }, scales: { x: { type: "time", time: { unit: "day", displayFormats: { day: "dd/MM" }, tooltipFormat: "dd/MM/yyyy" }, ticks: { source: "labels" } } } }} />
      {/* <p className="my-4">{"Cores: " + JSON.stringify(cores)}</p>
      <p className="my-4">{"Opcoes: " + JSON.stringify(opcoes)}</p>
      <p className="my-4">{"Datas Iniciais: " + JSON.stringify(datasIniciais)}</p>
      <p className="my-4">{"Datas Finais: " + JSON.stringify(datasFinais)}</p>
      <p className="my-4">{"Valores Iniciais: " + JSON.stringify(valoresIniciais)}</p>
      <p className="my-4">{"Valores Finais: " + JSON.stringify(valoresFinais)}</p> */}
    </div>
  )
}