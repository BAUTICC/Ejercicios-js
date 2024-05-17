function rectangulo(altura, ancho) {
    return altura * ancho
}

let resultado = rectangulo(10,6)
console.log(resultado);


function triangulo(base, altura) {
    return base * altura / 2
}

let tri = triangulo(10,6)
console.log(tri);


function largoDelArray(Array) {
return Array.length
}

largoDelArray("Arraylargo")

console.log(largoDelArray("Arraylargo"));


function cantidadDeLetras(palabra) {
return palabra.length
}

cantidadDeLetras("hola")

console.log(cantidadDeLetras("hola"));


function dolarHoy(Peso) {
return Peso / 1000 
}

let dols = dolarHoy(30000)
console.log(dols);


function precioFinal(Peso) {
return Peso / 790
}

let IVA = precioFinal(30000)
console.log(IVA)


function mitad(n1) {
return n1 / 2
}
let result = mitad(20)
console.log(result);