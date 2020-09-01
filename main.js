let nombre = 'Mariana';
console.log(`Mi nombre tiene ${nombre.length} letras`)

const contarLetras = (nomb, app) => {
  nomb = nomb.length;
  app = app.length;

  return `Tu nombre tiene ${nomb} letras y tu appelido tiene ${app} letras.`
}
console.log(contarLetras('Ada', 'Lovelace'));
console.log(contarLetras('Cosme', 'Fulanito'));
console.log(contarLetras('Lisa', 'Gomez'));

// Hacer una función para que cada vez que recibimos un nombre poder normalizarlo

//let rtaUsuarie = prompt('Por favor, escriba su nombre');
const normalizarNombre = nombre => {
  nombre = nombre.trim();
  const primeraLetra = nombre.charAt(0).toUpperCase();
  const restoDelNombre = nombre.slice(1, nombre.length).toLowerCase();
  const unirNombre = primeraLetra.concat(restoDelNombre);
  return unirNombre;
}
console.log(normalizarNombre('josefina'));
//console.log(normalizarNombre(rtaUsuarie));


// Ejercicios Funciones Nativas

// Longitud
// Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b 
// y devuelva true si tienen la misma longitud o false de lo contrario.
const tienenMismaLongitud = (a, b) => {
  if (a.length === b.length) {
    return true
  }
  else {
    return false
  }
}
console.log(tienenMismaLongitud('javascript', 'java')) // false
console.log(tienenMismaLongitud('manzana', 'cerveza')) // true


// esUltimoCaracter(palabra, caracter)
// Crear una función esUltimoCaracter que tome como argumentos una palabra 
// y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario 
/* Primero lo resolví de esta forma 

const esUltimoCaracter = (palabra, caracter) => {
  
  if (palabra.charAt(palabra.length-1) == caracter) {
    return true
  }
  else {
    return false
  }
}

Al verla pensé en la posibilidad de resolverla con operadores lógicos:
const esUltimoCaracter = (palabra, caracter) => palabra.charAt(palabra.length-1) == caracter || false

Buscando un método para otro ejercicio, encontré que ya existe un método */
const esUltimoCaracter = (palabra, caracter) => palabra.endsWith(caracter) 

console.log(esUltimoCaracter('lovelace', 'e')) // true
console.log(esUltimoCaracter('lovelace', 'f')) // false


// esContraseniaValida(contrasenia)
// Crear una función esValida que tome como argumento una contrasenia (string) y 
// devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres
const esContraseniaValida = contrasenia => contrasenia.length >= 8 || false

console.log(esContraseniaValida('contraseniaMuySegura')) // true
console.log(esContraseniaValida('abc123')) // false


// esLoMismo(a, b)
// Crear una función esLoMismo que tome como argumentos dos strings a y b y devuelva true 
// si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.
const esLoMismo = (a, b) => a.toUpperCase() === b.toUpperCase() || false

console.log(esLoMismo('javascript', 'JavaScript')) // true
console.log(esLoMismo('AdA LoVeLaCe', 'Ada Lovelace')) // true
console.log(esLoMismo('NO ESTOY GRITANDO', 'ESTOY GRITANDO')) // false


// contarPalabras(str)
// Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee
const contarPalabras = str => str.split(' ').length

console.log(contarPalabras('javascript')) // 1
console.log(contarPalabras('ada lovelace')) // 2
console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')) // 14


// burlarse(str)
// Crear una función burlarse que tome como argumento un string str y 
// devuelva el mismo string con todas las vocales reemplazadas por la letra i

const burlarse = str => {
  str = str.replace(/a/gi, 'i');
  str = str.replace(/e/gi, 'i');
  str = str.replace(/o/gi, 'i');
  str = str.replace(/u/gi, 'i')
  // existe una forma de agrupar todas las regex [aeou]
  return str
}

console.log(burlarse("No todos son iguales"))
console.log(burlarse("No lo puedo creer!"))
console.log(burlarse("Programar es dificíl"))


// esFraccionMayorAUno(fraccion)
// Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') 
// y devuelva true si dicha fracción es mayor a 1 o false de lo contrario
const esFraccionMayorAUno = fraccion => {
  let numerador = parseInt(fraccion.charAt(0))
  let denominador = parseInt(fraccion.charAt(2))
  fraccion = numerador / denominador
  if (fraccion > 1) {
    return true
  }
  else {
    return false
  }
}

console.log(esFraccionMayorAUno('1/2')) // false
console.log(esFraccionMayorAUno('2/2')) // false
console.log(esFraccionMayorAUno('4/2')) // true


// capitalizar(str)
// Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula
// Ejercicio hecho en clase. 
console.log(normalizarNombre('lovelace')); // 'Lovelace'
console.log(normalizarNombre('había una vez...')) // 'Había una vez...'


// aHackerSpeak(str)
// Crear una función aHackerSpeak que tome como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:
const aHackerSpeak = str => {
  str = str.replace(/i/gi, 1);
  str = str.replace(/e/gi, 3);
  str = str.replace(/a/gi, 4);
  str = str.replace(/s/gi, 5);
  str = str.replace(/o/gi, 0);
  return str
}
console.log(aHackerSpeak('javascript')) // 'j4v45cr1pt'
console.log(aHackerSpeak('soy una hacker')) // '50y un4 h4ck3r'
console.log(aHackerSpeak('ADA LOVELACE')) // '4D4 L0V3L4C3'


// obtenerPrimeraOracion(str)
// Crear una función obtenerPrimeraOracion que tome como argumento un string str y la primera oración de dicho string
const obtenerPrimeraOracion = str => str = str.split('.', 1)

console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')) // 'A mí no me preguntes, sólo soy una oración'
console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')) // 'Tengo varias oraciones.'


// ocultarContrasenia(contrasenia)
// Crear una función ocultarContraseña que tome como argumento una contrasenia de solo numeros y devuelva 
//un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos
const ocultarContrasenia = num => num = num.toString().replace(/[0-9]/g, '*')

console.log(ocultarContrasenia(123456)) // '******'
console.log(ocultarContrasenia(111222333)) // '*********'


// removerVocales(str)
// Crear una función removerVocales que tome como argumento un string str y devuelva un string con todas sus vocales removidas
const removerVocales = str => str.replace(/[aeio]/gi, '')
console.log(removerVocales('javascript')) // 'jvscrpt'
console.log(removerVocales('ada lovelace')) // 'd lvlc'


// obtenerExtension(archivo)
// Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo
const obtenerExtension = ext => ext.match(/[^.]+$/)[0]

console.log(obtenerExtension('imagen.png')) // 'png'
console.log(obtenerExtension('index.html')) // 'html'
console.log(obtenerExtension('notas.txt')) // 'txt'


// esPuenteSeguro(puente)
// Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y 
// devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar
const esPuenteSeguro = puente => {
  if (puente.search(' ') != -1) {
    return false
  }
  else {
    return true
  }
}

console.log(esPuenteSeguro('### ##')) // false
console.log(esPuenteSeguro('##### ####')) // false
console.log(esPuenteSeguro('########')) // true


// obtenerSubreddit(url)
// Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. 
// Crear una función obtenerSubreddit que tome como argumento un string url que consista en la url de un 
// subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')
const obtenerSubreddit = url => {
  url = url.split('/')
  return url[4]
}

console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/')) // 'javascript' 
console.log(obtenerSubreddit('https://www.reddit.com/r/aww/')) // 'aww' 



// esAnioNuevo(fecha)
// Crear una función esAnioNuevo que tome como argumento un string fecha con el formato DD:MM:YYYY un argumento y 
// devuelva true si la fecha es año nuevo o false si no lo es
const esAnioNuevo = str => str.slice(0, 5) === '01/01' || false

console.log(esAnioNuevo('03/05/2015')) // false
console.log(esAnioNuevo('22/01/1987')) // false
console.log(esAnioNuevo('01/01/2020')) // true

