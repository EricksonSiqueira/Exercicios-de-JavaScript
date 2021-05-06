 

function tabuada(){
    var ntxt = document.querySelector('input#num')
    var resultado = document.querySelector('div#res')
    let lista = document.querySelector('select#list')
    if(ntxt.value.length == 0){
        window.alert('Você não digitou nenhum número. Digite algum número para ver a tabuada.')
    }
    else{
        lista.innerHTML = ''
        let n = Number(ntxt.value)
        for(let c = 1; c <= 10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            lista.appendChild(item)
    }
    ntxt.value=''
    ntxt.focus()
}
}