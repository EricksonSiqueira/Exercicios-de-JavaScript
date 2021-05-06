



function contar(){
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pas')
    let resposta = document.querySelector('div#res')
    
    resposta.innerHTML = 'Preparando a contagem...'
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resposta.innerHTML = 'Impossível contar.'
    }else{
        let numInicio = Number(inicio.value)
        let numFim = Number(fim.value)
        let numPasso = Number(passo.value)
        resposta.innerHTML = ''
        if(numPasso <= 0){
            window.alert("Passo inválido.Considerando passo 1.")
            numPasso = 1
        }
        if(numInicio < numFim){ //contagem crescente
            for(let c = numInicio;c <= numFim; c += numPasso){
                resposta.innerHTML += `${c} \u{1F449} `
                }
        }else{//contagem decrescente
            for(let c = numInicio;c >= numFim;c -= numPasso){
                resposta.innerHTML += `${c} -> `
        }
        }
    resposta.innerHTML += `\u{1F3C1}`
    }

}