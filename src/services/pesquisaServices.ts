import fontes from "@/commons/fontes.json";
import { Pesquisa } from "@/types/pesquisa";

export async function fetchPesquisas(local: string, instituto: "datafolha" | "quaest"): Promise<Pesquisa> {
  const localNormalizado = localNormalizer(local)

  const fonte = fontes.find(f => f.local === localNormalizado);

  if (fonte) {
    if (fonte.links[instituto]) {
      const req = await fetch(fonte.links[instituto])
      const dados = await req.json() satisfies Pesquisa
      return dados
    }

    throw "O Instituto não possui pesquisas"
  }

  throw "A Capital é inválida"
}

export function localNormalizer(local: string): string {
  const localNormalizado = local.includes("-")
    ?
    decodeURI(local).split("-").map(l => l.replace(/^./, l[0].toUpperCase())).join(" ")
    :
    decodeURI(local).replace(/^./, local[0].toUpperCase())

  return localNormalizado
}