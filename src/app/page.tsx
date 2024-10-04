import Menu from "@/components/menu";
import Cabecalho from "@/components/cabecalho";
import Rodape from "@/components/rodape";

export default function Home() {
  return (
    <div className="max-w-screen-xl m-auto">
      <Cabecalho />
      <Menu />
      <Rodape />
    </div>
  );
}
