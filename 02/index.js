const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function(){
        if(carro.ligado === true){
            console.log(`Este carro já está ligado.`)
        }else if(carro.ligado === false){
            carro.ligado = true
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`)
        }
    },
    desligar: function(){
        if(carro.ligado === false){
            console.log(`Este carro já está desligado.`)
        }else if(carro.ligado === true){
            carro.ligado = false
            carro.velocidade = 0
            console.log(`Carro desligado. Velocidade: ${this.velocidade}`)
        }
    },
    acelerar: function (){
        if(carro.ligado === false){
            console.log(`Não é possível acelerar um carro desligado.`)
        }else if(carro.ligado === true){
            carro.velocidade += 10
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`)
        }
    },
    desacelerar: function (){
        if(carro.ligado === false){
            console.log(`Não é possível acelerar um carro desligado.`)
        }else if(carro.ligado === true){
            carro.velocidade -= 10
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`)
        }
    
    }

}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()
