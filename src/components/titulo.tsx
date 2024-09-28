import AtivadorTema from "./ativadorTema"

export default function Titulo() {
  return (
    <div className="flex items-center justify-center py-6 opacity-90">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mr-2.5">
        Pesquisas Eleitorais <span className="bg-gradient-to-r from-blue-500 to-red-500 dark:from-blue-400 dark:to-red-400 text-transparent bg-clip-text">2024</span>
      </h2>
      <AtivadorTema />
    </div>
  )
}