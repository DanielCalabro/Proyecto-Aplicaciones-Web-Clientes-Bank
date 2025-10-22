
// espero a que el DOM este cargado
document.addEventListener('DOMContentLoaded', () => {

// traigo el elemento padre donde van a ir los productos
const products = document.querySelector('.div-padre-promociones');
// creo los elementos hijos que van a ir dentro del padre
const newProduct1 = document.createElement('div');
const newProduct2 = document.createElement('div');
const newProduct3 = document.createElement('div');
const newProduct4 = document.createElement('div');
const newProduct5 = document.createElement('div');
const newProduct6 = document.createElement('div');
const newProduct7 = document.createElement('div');
const newProduct8 = document.createElement('div');
const newProduct9 = document.createElement('div');
const newProduct10 = document.createElement('div');
const newProduct11 = document.createElement('div');
const newProduct12 = document.createElement('div');
const newProduct13 = document.createElement('div');
const newProduct14 = document.createElement('div');
const newProduct15 = document.createElement('div');
const newProduct16 = document.createElement('div');
const newProduct17 = document.createElement('div');
const newProduct18 = document.createElement('div');
const newProduct19 = document.createElement('div');
const newProduct20 = document.createElement('div');
const newProduct21 = document.createElement('div');
const newProduct22 = document.createElement('div');
const newProduct23 = document.createElement('div');
const newProduct24 = document.createElement('div');

/*----------------------------------------------------------------*/
// les asigno la clase correspondiente a cada uno
newProduct1.setAttribute("class","div-hijo-prom");

const br = document.createElement('br');

const img1 = document.createElement('img');
img1.setAttribute("src","./img/Prom.indum.png");
img1.setAttribute("alt","indumentaria");
img1.setAttribute("width","200px");

const text1 = document.createTextNode("Ahorro Indumentaria");

const h3_1 = document.createElement('h3');
h3_1.textContent = "Desde 1.600 Puntos";

const button = document.createElement('button');
button.setAttribute("class","button-promociones");
button.textContent = "Agregar";

newProduct1.appendChild(br);
newProduct1.appendChild(img1);
newProduct1.appendChild(text1);
newProduct1.appendChild(h3_1);
newProduct1.appendChild(button);

products.appendChild(newProduct1);

/*----------------------------------------------------------------*/
newProduct2.setAttribute("class","div-hijo-prom");

const img2 = document.createElement('img');
img2.setAttribute("src","./img/prom.naft.png");
img2.setAttribute("alt","nafta");
img2.setAttribute("width","200px");

const text2 = document.createTextNode("Ahorro Nafta");

const h3_2 = document.createElement('h3');
h3_2.textContent = "Desde 2.200 Puntos";

newProduct2.appendChild(br.cloneNode());
newProduct2.appendChild(img2);
newProduct2.appendChild(text2);
newProduct2.appendChild(h3_2);
newProduct2.appendChild(button.cloneNode(true));

products.appendChild(newProduct2);

/*----------------------------------------------------------------*/
newProduct3.setAttribute("class","div-hijo-prom");

const img3 = document.createElement('img');
img3.setAttribute("src","./img/prom.resto.png");
img3.setAttribute("alt","restaurant");
img3.setAttribute("width","200px");

const text3 = document.createTextNode("Ahorro Restaurant");

const h3_3 = document.createElement('h3');
h3_3.textContent = "Desde 1.200 Puntos";

newProduct3.appendChild(br.cloneNode());
newProduct3.appendChild(img3);
newProduct3.appendChild(text3);
newProduct3.appendChild(h3_3);
newProduct3.appendChild(button.cloneNode(true));


products.appendChild(newProduct3);

/*----------------------------------------------------------------*/

newProduct4.setAttribute("class","div-hijo-prom");

const img4 = document.createElement('img');
img4.setAttribute("src","./img/prom.super.png");
img4.setAttribute("alt","supermercado");
img4.setAttribute("width","200px");
const text4 = document.createTextNode("Ahorro Supermercado");

const h3_4 = document.createElement('h3');
h3_4.textContent = "Desde 1.200 Puntos";

newProduct4.appendChild(br.cloneNode());
newProduct4.appendChild(img4);
newProduct4.appendChild(text4);
newProduct4.appendChild(h3_4);
newProduct4.appendChild(button.cloneNode(true));

products.appendChild(newProduct4);

/*----------------------------------------------------------------*/

newProduct5.setAttribute("class","div-hijo-prom");

const img5 = document.createElement('img');
img5.setAttribute("src","./img/prom.pelu.png");
img5.setAttribute("alt","peluqueria");
img5.setAttribute("width","200px");
const text5 = document.createTextNode("Ahorro Peluquería");

const h3_5 = document.createElement('h3');
h3_5.textContent = "Desde 1.100 Puntos";

newProduct5.appendChild(br.cloneNode());
newProduct5.appendChild(img5);
newProduct5.appendChild(text5);
newProduct5.appendChild(h3_5);
newProduct5.appendChild(button.cloneNode(true));

products.appendChild(newProduct5);

/*----------------------------------------------------------------*/

newProduct6.setAttribute("class","div-hijo-prom");

const img6 = document.createElement('img');
img6.setAttribute("src","./img/prom.farm.png");
img6.setAttribute("alt","farmacia");
img6.setAttribute("width","200px");
const text6 = document.createTextNode("Ahorro Farmacia");

const h3_6 = document.createElement('h3');
h3_6.textContent = "Desde 800 Puntos";

newProduct6.appendChild(br.cloneNode());
newProduct6.appendChild(img6);
newProduct6.appendChild(text6);
newProduct6.appendChild(h3_6);
newProduct6.appendChild(button.cloneNode(true));

products.appendChild(newProduct6);

/*----------------------------------------------------------------*/

newProduct7.setAttribute("class","div-hijo-prom");

const img7 = document.createElement('img');

img7.setAttribute("src","./img/prom.jug.png");
img7.setAttribute("alt","jugueteria");
img7.setAttribute("width","200px");
const text7 = document.createTextNode("Ahorro Juguetería");
const h3_7 = document.createElement('h3');
h3_7.textContent = "Desde 1.000 Puntos";

newProduct7.appendChild(br.cloneNode());
newProduct7.appendChild(img7);
newProduct7.appendChild(text7);
newProduct7.appendChild(h3_7);
newProduct7.appendChild(button.cloneNode(true));

products.appendChild(newProduct7);

/*----------------------------------------------------------------*/

newProduct8.setAttribute("class","div-hijo-prom");

const img8 = document.createElement('img');
img8.setAttribute("src","./img/prom.vete.png");
img8.setAttribute("alt","veterinaria");
img8.setAttribute("width","200px");
const text8 = document.createTextNode("Ahorro Veterinaria");
const h3_8 = document.createElement('h3');
h3_8.textContent = "Desde 700 Puntos";

newProduct8.appendChild(br.cloneNode());
newProduct8.appendChild(img8);
newProduct8.appendChild(text8);
newProduct8.appendChild(h3_8);
newProduct8.appendChild(button.cloneNode(true));

products.appendChild(newProduct8);

/*----------------------------------------------------------------*/

newProduct9.setAttribute("class","div-hijo-prom");

const div= document.createElement('div'); //Creo el div de promocion
div.setAttribute("class","div-promocion"); //aplico la clase
const textProm = document.createTextNode("promocion"); //Creo el texto
div.appendChild(textProm);  //Agrego el texto al div

const img9 = document.createElement('img');
img9.setAttribute("src","./img/desc.talad.png");
img9.setAttribute("alt","taladro");
img9.setAttribute("width","200px");
const text9 = document.createTextNode("Taladro Percutor Black+Decker");
const h3_9 = document.createElement('h3');
h3_9.textContent = "62.095 Puntos";

const buttonP = document.createElement('button');
buttonP.setAttribute("class","button-prom2");
buttonP.textContent = "Agregar";

newProduct9.appendChild(div);
newProduct9.appendChild(img9);
newProduct9.appendChild(text9);
newProduct9.appendChild(h3_9);
newProduct9.appendChild(buttonP);

products.appendChild(newProduct9);

/*----------------------------------------------------------------*/
newProduct10.setAttribute("class","div-hijo-prom");

const img10 = document.createElement('img');   
img10.setAttribute("src","./img/promo.tele.png");
img10.setAttribute("alt","televisor");
img10.setAttribute("width","200px");
const text10 = document.createTextNode("Tv Led Smart 50 pulgadas Philips 4k Borderless Con...");
const h3_10 = document.createElement('h3');
h3_10.textContent = "88.480 Puntos";

newProduct10.appendChild(div.cloneNode(true));
newProduct10.appendChild(img10);
newProduct10.appendChild(text10);
newProduct10.appendChild(h3_10);
newProduct10.appendChild(buttonP.cloneNode(true));

products.appendChild(newProduct10);

/*----------------------------------------------------------------*/

newProduct11.setAttribute("class","div-hijo-prom");

const img11 = document.createElement('img');
img11.setAttribute("src","./img/promo.tele2.png");
img11.setAttribute("alt","televisor");
img11.setAttribute("width","200px");
const text11 = document.createTextNode("Tv Smart 43 pulgadas Full Hd Google Tv Philips");
const h3_11 = document.createElement('h3');
h3_11.textContent = "61.680 Puntos";

newProduct11.appendChild(div.cloneNode(true));
newProduct11.appendChild(img11);
newProduct11.appendChild(text11);
newProduct11.appendChild(h3_11);
newProduct11.appendChild(buttonP.cloneNode(true));

products.appendChild(newProduct11);

/*----------------------------------------------------------------*/

newProduct12.setAttribute("class","div-hijo-prom");

const img12 = document.createElement('img');  
img12.setAttribute("src","./img/promo.reloj.png");
img12.setAttribute("alt","reloj");
img12.setAttribute("width","200px");
const text12 = document.createTextNode("Smartwatch Garmin Forerunner 55");
const h3_12 = document.createElement('h3');
h3_12.textContent = "47.470 puntos";

newProduct12.appendChild(div.cloneNode(true));
newProduct12.appendChild(img12);
newProduct12.appendChild(text12);
newProduct12.appendChild(h3_12);
newProduct12.appendChild(buttonP.cloneNode(true));

products.appendChild(newProduct12);

/*----------------------------------------------------------------*/
newProduct13.setAttribute("class","div-hijo-prom");



});