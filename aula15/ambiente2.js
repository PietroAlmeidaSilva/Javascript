var valores = [6,4,3,9,1]
console.log(valores)
valores.sort()
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])

for(var pos=0;pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor crescente de ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor crescente de ${valores[pos]}`)
}