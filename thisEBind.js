const pessoa = {
    saudacao: 'Bom dia',
    falar () {
        console.log(this.saudacao)
       // console.log(saudacao) neste caso da erro pq esta dentro da função, então pra acessar o atributo do objeto é necessario o this
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // o bind indica pra função quem é "detentor" do this
falarDePessoa()