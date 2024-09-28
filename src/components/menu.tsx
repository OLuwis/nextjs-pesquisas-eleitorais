import fontes from "@/commons/fontes.json";
import Seletor from "@/components/seletor";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function Menu() {
  return (
    <Card className="w-max m-auto">
      <CardHeader>
        <CardTitle>Parciais - 1º Turno</CardTitle>
        <CardDescription>Visualize as parciais do 1º turno das eleições de 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label>Capitais</Label>
            <Seletor placeholder="Selecione uma capital" opcoes={fontes.map(f => f.nome)} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Institutos</Label>
            <Seletor placeholder="Selecione um instituto" opcoes={["Datafolha", "Quaest"]} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Ver Resultados</Button>
      </CardFooter>
    </Card>
  )
}