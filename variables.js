
let apellido = 'Hernandez'
const edad = 90
/* Variable String */
let direccion= 'calle 49 numero 6666'
/* Variable numerica */
let dinero= 45
let medidas= 13.23
/* Variable Boleanas */
let activo= false
let estasCansado= true
/* Variable Arreglos */
let frutas= ['manzana', 'pera', 'fresa', 'manzana']
let edades= [ 12, 15, 20, 30, 55]
let arregloMixto= [ 'Nombre', 12, 12, 12.54, true]
/* variables objetos */
let info={
    nombre:'Pablito',
    apellido:'Mix',
    edad:22,
    direccion:{
        calle: 'perreo duro',
        numero:69,
        colonia:'corridos tumbados'
    }
}
/* Imprimir elementos de un objeto */
console.log(info.direccion.numero);
/* imprimir elemento de array */
console.log(arregloMixto[3]);