
"use strict";
// import { productos } from '../js/data.js';
//Listar productos disponibles
// const pp = productos;
let productos = [
    {id:1,
     name: 'Camisa',
     image: 'https://w7.pngwing.com/pngs/549/252/png-transparent-black-t-shirt-clothing-t-shirt-clothes-thumbnail.png',
     price: 200},
     {id:2,
     name: 'Pantalon',
     image: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43bf36.png',
     price: 150},
     {id:3,
     name: 'Tenis',
     image: 'https://w7.pngwing.com/pngs/30/966/png-transparent-nike-air-max-sneakers-nike-free-shoe-tenis-shoes-white-outdoor-shoe-running-thumbnail.png',
     price: 60},
     {id:4,
     name: 'Medias',
     image: 'https://w7.pngwing.com/pngs/287/908/png-transparent-tights-knee-black-m-gasp-better-bodies-store-black-shoe-tights.png',
     price: 10},

]

const celulares = [
    { id:1, ruta:"./imagen/image-1.jpg", marca: "samsung", precio: "$5,200.00", ref: "Galaxy s52"},
     { id:2, ruta:"./imagen/image-3.jpg", marca: "samsung", precio: "3,900.00", ref: "Galaxy A12" },
     { id:3, ruta:"./imagen/image-11.jpg", marca: "samsung", precio: "7,000.00", ref: "Galaxy A32 (128gb/8gb RAM" },
     { id:4, ruta:"./imagen/image-13.jpg", marca: "samsung", precio: "4,500.00", ref: "Galaxy A301"},
     { id:5,ruta:"./imagen/image-15.jpg", marca: "samsung", precio: "$5,300.00", ref: "Galaxy A70"},
     { id:6,ruta:"./imagen/image-16.jpg", marca: "samsung", precio: "$19,800.00", ref: "Galaxy Z fold 3"},
     { id:7,ruta:"./imagen/image-17.jpg", marca: "samsung", precio: "$16,500.00", ref: "Galaxy s21"},
     { id:8,ruta:"./imagen/image-1.jpg", marca: "samsung", precio: "$5,200.00", ref: "Galaxy s52"}]

/* const listProducts = document.getElementById('product-list'); */
let products = "";

function showProducts(celulares){
    for (let i = 0; i < celulares.length; i++) {
        console.log(celulares[i].name)
                  products += `<div class="card">
                  <img class="width" src="${celulares[i].ruta}" alt="">
                  <div class="borde">
                      <p class="p">${celulares[i].marca}</p>
                      <h3 class="precio">${celulares[i].ref}</h3>
                      <p class="p">presios:</p>
                      <h3 class="precio">${celulares[i].precio}</h3>
                      <button id="${celulares[i].id}" class="btn btn-primary" onclick="getIdProduct(${celulares[i].id});">Añadir al carrito</button>
                      <div class="carrito">
                          <img class=" img-carrito" src="./imagen/shopping-cart-3.svg" alt="carrito">
                      </div>
                      <div class="corazon">
                          <img class="img-corazon" src="./imagen/heart-1.svg" alt="corazon">
                      </div>
                  </div>
              </div>`     
     }
     const container = document.getElementById('product-list');
     container.innerHTML = products;
}
// window.onload = showProducts()
showProducts(celulares);

/* get item and stores in localStorage */
function getIdProduct(id){
    let item = productos.find(item => item.id == id);
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    if(cart == null){
        cart = [];
    }
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
}




/* function getIdProduct(id){
    console.log(id);
} */

window.showProducts = showProducts;
window.getIdProduct = getIdProduct;