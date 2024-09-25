import Seletor from "./seletor";

export default function Menu() {
  return (
    <nav className="border border-gray-500 rounded-md m-auto w-fit p-4 flex flex-col gap-3">
      <Seletor placeholder="Selecione uma capital" opcoes={["Opção 1", "Opção 2"]} />
      <Seletor placeholder="Selecione um instituto" opcoes={["Datafolha", "Quaest"]} />
    </nav>
  )
}