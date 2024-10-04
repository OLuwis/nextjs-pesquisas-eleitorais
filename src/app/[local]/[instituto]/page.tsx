import Menu from "@/components/menu";
import Rodape from "@/components/rodape";
import Grafico from "@/components/grafico";
import Cabecalho from "@/components/cabecalho";
import { type Pesquisa } from "@/types/pesquisa"
import { fetchPesquisas } from "@/services/pesquisaServices";

export default async function Pesquisa({ params }: { params: { local: string, instituto: "datafolha" | "quaest" } }) {
  const pesquisa: Pesquisa = await fetchPesquisas(params.local, params.instituto)

  return (
    <div className="max-w-screen-xl m-auto">
      <Cabecalho />
      <Menu params={params} />
      <Grafico pesquisa={pesquisa} params={params} />
      <Rodape />
    </div>
  )
}