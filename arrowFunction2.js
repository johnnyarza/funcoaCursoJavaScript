function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade) // this nao varia em arrow function
    },1000)
}

new Pessoa