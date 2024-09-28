export interface Pesquisa {
  resultado: {
    cenarios: [{
      bandeira: string,
      variavel_cruzamento: string,
      data: [{
        color: string,
        option: string,
        values: [{
          date: Date,
          value: number
        }]
      }]
    }]
  }
}