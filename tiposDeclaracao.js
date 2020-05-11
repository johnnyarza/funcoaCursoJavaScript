console.log(soma(3, 4))
//console.log(sub(3,4)) aqui dá erro
//console.log(mult(3,4)) aqui dá erro

// function declaration 
function soma(x, y) { //desta maneira pode-se usar a função antes da declaração (linha anterior)
    return x + y
}

//function expression
const sub = function (x , y) {
    return x - y
}
console.log(sub(3,4))

//named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3,4))



