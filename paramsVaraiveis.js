function soma () {
    let soma = 0
    for ( i in arguments) { // arguments é um array especial das funções que contém os argumentos passados na chamada da função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log()

console.log(soma(1))
console.log()

console.log(soma(1.1,2.2,3.3))
console.log()

console.log(soma(1.1,2.2,"teste"))
console.log()

console.log(soma("a","b","c"))
console.log()