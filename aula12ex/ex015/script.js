function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'criancamasc.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemmasc.png')
            } else if (idade < 55) {
                // Adulto
                img.setAttribute('src', 'adultomasc.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosomasc.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'criancafem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade < 55) {
                // Adulto
                img.setAttribute('src', 'adultofem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosofem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}