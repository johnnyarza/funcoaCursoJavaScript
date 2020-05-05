//Função em JS é First-Class Object(Citizien)
//High-order function

//criar de forma literal
function fun1(){}

//Armazenar em uma variável
const fun2 = function () {}

//Armazena em uma array
const array =   [function(a , b){return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em atributos de objetos
const obj = {}
obj.falar =  function (){console.log("Opa")}
obj.falar()

//Passar um funcao como parametro 
function run (fun) {
    fun() // tem que colocar os parenteses mesmo se nao tiver parametros
}
run(obj.falar)
run(function () {console.log ('Executando....')})

//Uma funcao pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3)
const tresMais = soma(1,2)
tresMais(3)