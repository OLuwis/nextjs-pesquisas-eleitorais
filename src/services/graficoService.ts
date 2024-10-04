import { ChartConfig } from "@/components/ui/chart";
import { Pesquisa } from "@/types/pesquisa";

export function criarConfig(dados: Pesquisa): ChartConfig {
  const data = dados.resultado.cenarios[0].data
  const config: ChartConfig = {}

  data.forEach(d => {
    config[d.option.replace(/\W/g, "")] = { label: d.option, color: d.color }
  })

  return config
}

export function criarDados(dados: Pesquisa): { [key: string]: unknown }[] {
  const data = dados.resultado.cenarios[0].data
  const novosDados: { [key: string]: unknown }[] = data[0].value ? [{}] : data[0].values && !data[0].values[2] ? [{}, {}] : [{}, {}, {}]

  data.forEach(d => {
    if (d.value && d.date) {
      if (!("date" in novosDados[0])) {
        novosDados[0]["date"] = d.date
      }

      novosDados[0][d.option.replace(/\W/g, "")] = parseInt((d.value * 100).toString())
    }

    if (d.values) {
      if (!("date" in novosDados[0])) {
        novosDados[0]["date"] = d.values[0].date
        novosDados[1]["date"] = d.values[1].date
      }

      novosDados[0][d.option.replace(/\W/g, "")] = parseInt((d.values[0].value * 100).toString())

      if (d.values[1]) {
        novosDados[1][d.option.replace(/\W/g, "")] = parseInt((d.values[1].value * 100).toString())
      }

      if (d.values[2]) {
        if (!("date" in novosDados[2])) {
          novosDados[2]["date"] = d.values[2].date
        }
        novosDados[2][d.option.replace(/\W/g, "")] = parseInt((d.values[2].value * 100).toString())
      }
    }
  })

  return novosDados
}