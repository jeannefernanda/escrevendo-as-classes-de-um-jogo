class Heroi{

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo  = tipo
    }

    atacar(){
        if(this.tipo === 'mago') this.ataque = 'usou magia'
        else if(this.tipo === 'guerreiro') this.ataque = 'usou espada'
        else if(this.tipo === 'monge') this.ataque = 'usou artes marciais'
        else if(this.tipo === 'ninja') this.ataque = 'usou shuriken'
        else{
            console.log(`Escolha um tipo válido: mago, guerreiro, monge ou ninja.`)
            return
        }

        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}

const heroi1 = new Heroi('Thy', 20, 'guerreiro')
//console.log(heroi1.nome)
heroi1.atacar()

const heroi2 = new Heroi('Lily', 25, 'odalisca')
heroi1.atacar()