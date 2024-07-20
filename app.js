//Interaccion entre HTML y JS con el DOM (Document Object Model)

let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;

//Con esta funcion seleccionamos el elemento del html y le asignamos un texto.
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}

function generarNumeroSecreto() {
    //return numeroSecreto = Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function validarIntentos(){
    //Por medio del getElementById obtenemos el valor del elemento input del html por medio de un ID
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //Cuando el usuario acierta
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Adivinaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'} `);
        //habilita el boton Nuevo Juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //Cuando el usuario no acierta
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        }else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos ++;
        limpiarInput();
    }
    return;
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
}

function reiniciarJuego() {
    //limpiar caja
    limpiarInput();
    //Indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //Inicializar el numero de intentos.
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

//-----------------------------------------------------------------------------------------------

/*//Desafio 2.1
function saludo(){
    console.log('¡Hola, mundo!');
}
saludo();

//Desafio 2.2
function hola(nombre) {
    console.log(`Hola ${nombre}`)
}
hola('leon');
//Desafio 2.3

function dobleDelNumero(numero) {
    return numero*2;    
}
let ingresoNumero = Math.floor(Math.random()*10)+1;
let numeroDoble = dobleDelNumero(ingresoNumero);
console.log(ingresoNumero);
console.log(numeroDoble);
//Desafio 2.4

function promedio(num1, num2, num3) {
    return ((num1+num2+num3)/3);
}
let nume1 = 10; 
let nume2 = 50;
let nume3 = 60;
let resultado = promedio(nume1, nume2, nume3)
console.log(resultado);

//Desafio 2.5
function numeroMayor(numero1, numero2) {
    if(numero1 > numero2){
        return numero1
    }else{
        return numero2
    }
}
let numer1 = 152; 
let numer2 = 99;
let result = numeroMayor(numer1, numer2)
console.log(result);

//Desafio 2.6
function cuadrado(numCuadrado) {
    return numCuadrado**2
}
let ingresarNumero = 9;
let numeroCuadrado = cuadrado(ingresarNumero);
console.log(numeroCuadrado);


function calcularPromedio(nota1, nota2, nota3, nota4) {
    let promedio = (nota1 + nota2 + nota3 + nota4)/4;
    return promedio;    
}
let nota_1 = 7;
let nota_2 = 9;
let nota_3 = 1;
let nota_4 = 9;
let resultadoPromedio = calcularPromedio(nota_1, nota_2, nota_3, nota_4);
console.log(resultadoPromedio);

function verificarAprobacion(promedio){
    return (promedio >= 5) ? "Aprobado" : "Reprobado";
}
let verifAprobacion = verificarAprobacion();
console.log(verifAprobacion);

//Desafio 3.1
function indiceMasaCorporal(altura, peso) {
    let indice = (peso/(altura*altura))
    return indice;
}

IMC = indiceMasaCorporal(1.82, 86);
console.log(IMC);

//Desafio 3.2
function factorial(numero) {
    let resultado = 1;
    for (let index = 2; index <= numero; index++) {
        resultado *= index;
    }
return resultado;    
}
let resultad = factorial(5);
console.log(resultad);

//Desafio 3.3
function conversorMoneda(dolares) {
    let resultado = dolares * 3928.33
    let cantDolares = dolares;
    console.log(cantDolares, 'Dolares equivalen a', resultado, 'Pesos Colombianos' );    
}
conversorMoneda(1);

//Desafio 3.4
function areaPerimRectangulo(altura, anchura) {
    area = altura * anchura;
    perimetro = 2*(altura + anchura);
    console.log('El area del rectangulo es:', area, 'El perimetro del rectangulo es:', perimetro);
}
areaPerimRectangulo(5,6);

//Desafio 3.5
function areaPerimCirculo(radio) {
    pi = 3.14;
    area = pi*radio*radio;
    perimetro = 2*pi*radio
    console.log('El area del circulo es:', area, 'El perimetro del circulo es:', perimetro);
} 
areaPerimCirculo(4);

//Desafio 3.6
function tablaMultiplicar(numero) {  
    let resultado;
    for(i = 0; i <= 10; i ++){
        resultado = numero*i;
        console.log(numero, "X", i, '=', resultado)      
    }    
}
tablaMultiplicar(9)

//Desafio 4.1
let listaGenerica = [];
console.log(listaGenerica);

//Desafio 4.2
let lenguajesDeProgramacion = ['javaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

//Desafio 4.3
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);

//Desafio 4.4
function lenguajes(lista) {
    lista.forEach(function(elemento){
        console.log(elemento);
    });
}
lenguajes(lenguajesDeProgramacion);

//Desafio 4.5
function lenguajesInverso(lista) {
    for(let i = lista.length - 1; i >= 0; i--){
        console.log(lista[i]);
    }
}
lenguajesInverso(lenguajesDeProgramacion);

//Desafio 4.6
function calcularPromedio(lista) {
    if(lista.length === 0) return 0; // Manejo de lista vacia
    let suma = 0;
    for(let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma / lista.length;
}
let numeros = [1,5,10,25,45,52];
let promedio = calcularPromedio(numeros);
console.log(`El promedio es ${promedio}`);

//Desafio 4.7
function numeroMayorMenor(lista) {
    let max = Math.max(...lista);
    let min = Math.min(...lista);

    console.log(`El numero mayor es: ${max}`);
    console.log(`El numero menor es: ${min}`);
}
let numeroMaxMin = numeroMayorMenor(numeros);

//Desafio 4.8
function suma(lista) {
    let suma = 0;
    for(let i = 0; i < lista.length; i ++){
        suma += lista[i];
    }
    return suma;
}
let sumaLista = suma(numeros);
console.log(`La suma de toda la lista es ${sumaLista}`);

//Desafio 4.9
function encontrarPocision(lista, elemento) {
    for(let i = 0; i < lista.length; i ++){
        if(lista[i] === elemento){
            return i;
        }
    }
    return -1;    
}
let resultado = encontrarPocision(numeros, 52)
console.log(resultado);

//Desafio 4.10
function sumaDosListas(lista1, lista2) {
    if(lista1.length !== lista2.length){
        throw new Error('las listas deben tener el mismo tamaño')
    }
    let resultado = [];

    for(let i = 0; i < lista1.length; i ++){
        resultado.push(lista1[i] + lista2[i]);
    }
    return resultado;
}

let lista11 = [5,6,9,15];
let lista22 = [5,6,9,14];
let sumaListas = sumaDosListas(lista11,lista22);
console.log(sumaListas);

//Desafio 4.11
function listaCuadrado(lista) {
    let cuadrado = [];
    for(let i = 0; i < lista.length; i ++){
        cuadrado.push(lista[i]*lista[i]);
    }
    return cuadrado;
}
let elevCuadrado = listaCuadrado(lista22);
console.log(elevCuadrado);*/

