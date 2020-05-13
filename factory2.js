
function criarProduto(nome, preco) {
    return {
        nome, //nao precisa colocar o dois pontos pq os parametros ja tem o mesmo nome desejado para o objeto retornado
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Sabao', 45.5))