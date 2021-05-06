function carregar(){
    var mensagem = window.document.querySelector('div#msg')
    var imagem = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 5
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        imagem.src = 'manharedondo.png'
        document.body.style.background = '#668817'
    }
    else if (hora >= 12 && hora < 18){
        //BOA TARDE
        imagem.src = 'tarderedondo.png'
        document.body.style.background = '#fd8f1a'
    }else{
        //BOA NOITE
        imagem.src = 'noiteredondo.png'
        document.body.style.background = '#013a57'
    }
}
