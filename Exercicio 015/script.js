function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.getElementById('res')

    if (fAno.value == 0 || fAno.value > ano){
        window.alert("ERRO! Verifique se os dados estão corretos e tente novamente.")
    } else {
        var fsex = document.getElementsByName('radsex')
        idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var titulo = document.getElementById('titulo')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', 'Criança-homem-red.png')
                document.body.style.background = '#fe906d'
                titulo.style.color = '#ffffff'
            }
            else if(idade >= 10 && idade < 20){
                // jovem
                img.setAttribute('src', 'Jovem-homem-red.png')
                document.body.style.background = '#eae6e5'
                titulo.style.color = '#000000'
                
            }
            else if (idade >=20 && idade < 60){
                //adulto
                img.setAttribute('src', 'Adulto-homem-red.png')
                document.body.style.background = '#004976'
                titulo.style.color = '#ffffff'
            }
            else{
                //idoso
                img.setAttribute('src', 'Idoso-homem-red.png')
                document.body.style.background = '#322f1e'
                titulo.style.color = '#ffffff'
            }
            
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', 'Criança-mulher-red.png')
                document.body.style.background = '#e734ff'
                titulo.style.color = '#ffffff'
            }
            else if(idade >= 10 && idade < 20){
                // jovem
                img.setAttribute('src', 'Jovem-mulher-red.png')
                document.body.style.background = '#8884a7'
                titulo.style.color = '#ffffff'
            }
            else if (idade >=20 && idade < 60){
                //adulto
                img.setAttribute('src', 'Adulto-mulher-red.png')
                document.body.style.background = '#7d8296'
                titulo.style.color = '#ffffff'
            }
            else{
                //idoso
                img.setAttribute('src', 'Idosa-mulher-red.png')
                document.body.style.background = '#47282d'
                titulo.style.color = '#ffffff'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos de idade.`
        res.appendChild(img)
        
    }
}