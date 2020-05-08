let comparaComThis  = function (param) {
    console.log(param === this)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // mesmo neste caso o this da arrow function não muda
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)