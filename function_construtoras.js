class carro{
    constructor(nome,ano,valor){   
    this.nome=nome
    this.ano = ano
    this.valor = valor
    console.log('construtor criado')}

}
 const p1 = new carro('fiat','2020',20.000)
 
 console.log(p1.nome,p1.ano,p1.valor)