function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente ;-)')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}` -> teste da calculadora funcionando
        var gênero = ''
        var img = document.createElement('img')//cria o elemento imagem
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '../bebe_m.png')
                document.body.style.background = '#c5dfe0'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../jovem_masc.png')
                document.body.style.background = '#8daec3'
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', '../adulto_masc.png')
                document.body.style.background = '#4d3e6b'
            } else {
                //idoso
                img.setAttribute('src', '../idoso_masc.png')
                document.body.style.background = '#81749c'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '../bebe_f.png')
                document.body.style.background = '#efe2bf'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../jovem_fem.png')
                document.body.style.background = '#f5a489'
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', '../adulto_fem.png')
                document.body.style.background ='#ef8184'
            } else {
                //idoso
                img.setAttribute('src', '../idosa_fem.png')
                document.body.style.background = '#a76378'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}