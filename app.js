
// espero a que el DOM este cargado
document.addEventListener('DOMContentLoaded', () => {

// traigo el elemento padre donde van a ir los productos
const productsDomElement = document.querySelector('.div-padre-promociones');

const listPromosProduc = [
    {name: 'Ahorro Indumentaria', price: 1600, img: './img/Prom.indum.png'},
    {nmae: 'Ahorro Combustible', price: 1200, img: './img/prom.naft.png'},
    {name: 'Ahorrro Restaurant', price: 1200, img: './img/prom.resto.png'},
    {name:'Ahorro Supermercados', price: 1200, img: './img/prom.super.png'},
    {name: 'Ahorro Peluqueria', price: 1200, img: './img/prom.pelu.png'},
    {name: 'Ahorro Farmacia', price: 800, img: './img/prom.farm.png'},
    {name: 'Ahorro Jugueteria', price: 1000, img: './img/prom.jug.png'},
    {name: 'Ahorro Veterinaria', price: 700, img: './img/prom.vete.png'},
]

function createPromoProduct(productDesc){
    
    const newProductInicial = document.createElement('div');
    newProductInicial.setAttribute("class","div-hijo-prom");

    const br = document.createElement('br');

    const img1 = document.createElement('img');
    img1.setAttribute("src", productDesc.img);
    img1.setAttribute("alt",productDesc.name);
    img1.setAttribute("width","200px");

    const newName = document.createElement('p');
    newName.setAttribute("class","product-name");
    newName.innerText = productDesc.name;

    const newPrice = document.createElement('h3');
    newPrice.innerText = `Precio: $${productDesc.price}.00`;

    const button = document.createElement('button');
    button.setAttribute("class","button-promociones");
    button.textContent = "Agregar";

    newProductInicial.appendChild(br);
    newProductInicial.appendChild(img1);
    newProductInicial.appendChild(newName);
    newProductInicial.appendChild(newPrice);
    newProductInicial.appendChild(button);

    return newProductInicial;
}

listPromosProduc.forEach( (productDesc) => {
    const newPromoProduct = createPromoProduct(productDesc);
    productsDomElement.appendChild(newPromoProduct);
} );



/*----------------------------------------------------------------*/

const listProducts = [
    {name: 'Smartwatch Garmin Forerunner 55', price: 1000, img: './img/promo.reloj.png'},
    {name: 'Tv Led Smart 50" Philips 4k Borderless Con...', price: 2000, img: './img/promo.tele.png'},
    {name: 'Tv Smart 43" Full Hd Google Tv Philips', price: 3000, img: './img/promo.tele2.png'},
    {name: 'Taladro Atornillador', price: 4000, img: './img/desc.talad.png'},
    {name: 'Escalera 5 posiciones Con Plataformas', price: 5000, img: './img/promo.esc.png'},
    {name: 'Tv Snart 32" Hd Philips con Google Tv', price: 6000, img: './img/descuentos.png'},
    {name: 'Licuadora y procesadora Nutrix Pro', price: 7000, img: './img/licuadora.png'},
    {name: 'Multi Consola Portátil', price: 8000, img: './img/juego.png'},
    {name: 'Paleta de Paddle Elite Pro', price: 9000, img: './img/paleta.png'},
    {name: 'Fábrica de Hielo Nutrix', price: 10000, img: './img/hielo.png'},
    {name: 'Hongo Calefactor A Gas', price: 11000, img: './img/calefactor2.png'},
    {name: 'Juguera Cold Pess Juicer Nutrix', price: 12000, img: './img/juguera.png'},
    {name: 'Perfume Polo Blue Edt 75ml.For Him ', price: 13000, img: './img/perfume.png'},
    {name: 'Batidora De Mesa Daewoo ', price: 14000, img: './img/batidora.png'},
    {name: 'Valija Negra Con Expansor 28 ', price: 15000, img: './img/valija.png'},
    {name: 'Edredon Modelo Plumon Medida King', price: 16000, img: './img/cama.png'},
]

function createProduct(product){

    const newProduct = document.createElement('div');
    newProduct.setAttribute("class","div-hijo-prom");

    const divPromociones = document.createElement('div');
    divPromociones.setAttribute("class","div-promocion");
    divPromociones.innerText = "Promociones";

    const img12 = document.createElement('img');  
    img12.setAttribute("src",product.img);
    img12.setAttribute("alt",product.name);
    img12.setAttribute("width","200px");

    const newPName = document.createElement('p');
    newPName.setAttribute("class","product-name");
    newPName.innerText = product.name;

    const newPPrice = document.createElement('h3');
    newPPrice.innerText = `Precio: $${product.price}.00`;

    const buttonP = document.createElement('button');
    buttonP.setAttribute("class","button-prom2");
    buttonP.textContent = "Agregar";

    newProduct.appendChild(divPromociones);
    newProduct.appendChild(img12);
    newProduct.appendChild(newPName);
    newProduct.appendChild(newPPrice);
    newProduct.appendChild(buttonP);

    return newProduct;
}


listProducts.forEach( (product) => {
    const newProduct = createProduct(product);
    productsDomElement.appendChild(newProduct);
} );


/*------------------------------------------------------------------------ */

    const buttons = document.querySelectorAll('.button-promociones, .button-prom2');
    console.log(buttons);

    buttons.forEach( (button) => {
        button.addEventListener('click', () => {
            alert("Producto agregado al carrito");
        });
    });





/*----------------------------------------------------------------*/
/*
const objeto={
    nombre:"Monitor",
    precio: 300,
    devolverIva: function() {
        console.log( this.precio)
    }
}
objeto.devolverIva();

const arreglo=[1,2,3,4,5];
arreglo.forEach( (num) => console.log(num) );

const nuevoArreglo= [];
arreglo.forEach( (numero) => {
    nuevoArreglo.push(numero + 5);
} );

console.log("nuevo arreglo usando ForEach: ",nuevoArreglo);
                    numero que recibe del arreglo => numero del arreglo + 10
const arregloMapeado = arreglo.map( (numero) => numero + 10 );

console.log("arreglo usando Map: ",arregloMapeado);
*/
/*------------------ */
/*
const arregloFiltrado = arreglo.filter( (numero) => numero > 3 );

console.log("arreglo usando Filter: ",arregloFiltrado);

const alumnos = [
    {nombre: "Juan", edad: 20, dni: 12345678},
    {nombre: "Ana", edad: 22, dni: 87654321},
    {nombre: "Luis", edad: 19, dni: 11223344},
    {nombre: "Maria", edad: 21, dni: 44332211}
];

const elementoBuscado = alumnos.find( (alumnos) => alumnos.edad === 20 );

console.log("Elemento encontrado usando Find: ",elementoBuscado);

const totalEdades = alumnos.reduce( (acumulador, alumno) => acumulador + alumno.edad, 0 );

console.log("Total de edades usando Reduce: ",totalEdades);


if(alumnos.length > 0){
    console.log("El arreglo no esta vacio");
} else {
    console.log("El arreglo esta vacio");  
}

switch(elementoBuscado.edad){
    case 18:
        console.log("Es mayor de edad");
        break;
    case 20:
        console.log("Tiene 20 años");
        break;
    case 25:
        console.log("Tiene 25 años");
        break;
    default:
        console.log("No se encontro la edad");
}

*/


});