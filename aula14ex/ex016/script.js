function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
        // window.alert('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} ` // para colocar emoji, pesquisar o código no google 'unicode emoji list e add \u{código aqui}'
            }
        } else {
            // contagem regresiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
        
    }
}