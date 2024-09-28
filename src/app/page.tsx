import { Capital } from "@/types/capital";
import dados from "@/commons/fontes.json"
import Menu from "@/components/menu";
import Titulo from "@/components/titulo";
import Grafico from "@/components/grafico";

export default async function Home() {
  // const capitais: Capital[] = dados as Capital[]
  // const salvador: Capital | undefined = capitais.find(c => c.nome === "Salvador")
  // const link = salvador?.links.quaest || ""

  // const res = await fetch(link)
  // const data = res.text()

  return (
    <div className="max-w-screen-xl m-auto">
      <Titulo />
      <Menu />
      <Grafico />
    </div>
  );
}
