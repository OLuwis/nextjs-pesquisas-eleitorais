import Menu from "@/components/menu";
import Titulo from "@/components/titulo";
import Grafico from "@/components/grafico";
import { type Pesquisa } from "@/types/pesquisa"
import { fetchPesquisas } from "@/services/pesquisaServices";

export default async function Pesquisa({ params }: { params: { local: string, instituto: "datafolha" | "quaest" } }) {
  const pesquisa: Pesquisa = await fetchPesquisas(params.local, params.instituto)

  return (
    <div className="max-w-screen-xl m-auto">
      <Titulo />
      <Menu params={params} />
      <Grafico pesquisa={pesquisa} />
    </div>
  )
}