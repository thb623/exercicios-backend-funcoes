const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 1,
            precoUnit: 6000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 1,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function(){
        console.log(`Cliente: ${carrinho.nomeDoCliente}`)
        calcularTotalAPagar()
        calcularTotalDeItens()
    },
    addProduto: function(produto){
        let produtoJaExistente = false
        for(let i = 0; i < carrinho.produtos.length; i++){
            if(produto.id === carrinho.produtos[i].id){
                carrinho.produtos[i].qtd += produto.qtd
                produtoJaExistente = true
                break
            }
        }
        if(!produtoJaExistente){
            carrinho.produtos.push(produto)
        }
    },
    imprimirDetalhes: function(){
        console.log(`Cliente: ${carrinho.nomeDoCliente}`)
        for(let i = 0; i < carrinho.produtos.length;i++){
            const {nome, qtd, precoUnit} = carrinho.produtos[i]
            const precoTotal = (qtd * precoUnit) / 100
            console.log(`Item ${i + 1} - ${nome} - ${qtd} und - R$ ${precoTotal.toFixed(2)}`)
        }
        carrinho.imprimirResumo()
        calcularTotalAPagar()
        calcularTotalDeItens()
    },
    calcularDesconto: function(){
        let desconto = 0
        let totalDeItens = 0
        let menorPreco = carrinho.produtos[0].precoUnit;        for(let i = 0; i < carrinho.produtos.length; i++){
            totalDeItens += carrinho.produtos[i].qtd
            if(carrinho.produtos[i].precoUnit < menorPreco){
                menorPreco = carrinho.produtos[i].precoUnit;
            }
        }
        let precoItens = 0
        for(let i = 0; i < carrinho.produtos.length; i++){
            precoItens += (carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd)/ 100
        }
        if(totalDeItens > 4){
            console.log(`Total a pagar com desconto: ${precoItens - (menorPreco / 100)}`)
            console.log(`Voce comprou acima de 4 itens e ganhou o item mais barato de graça! `)
        }else if(totalDeItens <= 4 && precoItens > 100){
            desconto = (precoItens * 0,10)
             console.log(`Total a Pagar com desconto de 10% e menos de 4 itens: ${(precoItens - desconto)}`)
        }
    }
}


function calcularTotalDeItens(){
        let totalDeItens = 0
        for(let i = 0; i < carrinho.produtos.length; i++){
            totalDeItens += carrinho.produtos[i].qtd
        }
        console.log(`Total de itens: ${totalDeItens}`)
        
}


function calcularTotalAPagar(){
        let precoItens = 0
        for(let i = 0; i < carrinho.produtos.length; i++){
            precoItens += (carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd)/ 100
        }
        console.log(`Total a Pagar: ${precoItens}`)    
}


const novaBermuda = {
    id: 5,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.calcularDesconto()
