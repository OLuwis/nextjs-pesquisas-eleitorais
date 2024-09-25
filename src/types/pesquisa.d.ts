export interface Pesquisa {
  resultado: {
    cenarios: [{
      bandeira: string,
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