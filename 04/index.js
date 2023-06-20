const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor){
        contaBancaria.saldo += valor
        const historico ={
            tipo: "Depósito",
            valor: valor
        }
        contaBancaria.historicos.push(historico)
        return `Depósito de R$ ${valor / 100} realizado para o cliente: ${this.nome}.`
    },
    sacar: function(valor){
        contaBancaria.saldo -= valor
        const historico ={
            tipo: "saque",
            valor : valor
        }
        contaBancaria.historicos.push(historico)
        return `Saque de R$ ${valor / 100} realizado para o cliente ${this.nome}.`
    },
    extrato: function(){
        console.log(`Extrato de ${this.nome} - Saldo: $${this.saldo / 100}`);
    console.log("Histórico:");
        for(let i = 0; i < contaBancaria.historicos.length;i++){
        const transacao = this.historicos[i]
        console.log(`${transacao.tipo} de R$ ${transacao.valor / 100}`)
        }    
          
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());

