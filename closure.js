//Closure é o escopo criado quando uma função é decalrada 
//Esse escopo permite a função acessar e manipular variaveis exxternas à funçõa

//Contexto léxico em ação

const x = 'Global'

function fora () {
    const x = 'Local'
    function dentro () {
        return x
    }

    return dentro
}

const minhaFuncao = fora ()
console.log(minhaFuncao())