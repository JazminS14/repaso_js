/* Declarar una función */
function hola(){
   /*  console.log('Hola y ya'); */
    
}
/* Llamar función */
hola()

/* Funciones de flecha */
const hola2 = ()=>{
    /* console.log('hola2'); */
}
hola2()

/* Funciones con parametros/ argumrntos/ propiedades */
const suma= (a,b) =>{
   /*  console.log(a+b); */
}
suma(7,25.300)

/* Funciones que retornan valores */
const multiplicacion= (x,y)=>{
    return x*y
}
const resultado = multiplicacion(8,4)
console.log(resultado);