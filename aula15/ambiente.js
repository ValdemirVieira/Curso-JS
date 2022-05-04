let num = [6, 3, 1, 9, 4]
num.push(5)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o número ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`Valor não encontrado!`)
}else {
    console.log(`O valor está na posição ${pos}`)
}
