let dobro = function (a) {
    return (2 * a) 
}
console.log(dobro(2))

dobro = (a) => {
    return 2 * a
}
console.log(dobro(2))

dobro = a => 2 * a // return esta implicito
console.log(dobro(2))

let ola = function () {
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' // possui 1 param

console.log(ola())