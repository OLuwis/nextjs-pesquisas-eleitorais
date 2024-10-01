export interface Pesquisa {
  resultado: {
    cenarios: [{
      bandeira: string,
      variavel_cruzamento: string,
      data: [{
        color: string,
        option: string,
        date?: Date,
        value?: number,
        values?: {
          date: Date,
          value: number
        }[]
      }]
    }]
  }
}