
/* get items from localStorage and show in cart */

function getCart(){
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let total = 0;
    let productosCart = "";
    if(cart != null){
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
            productosCart += `<div class="col-sm">
                             <div class="card" style="width: 18rem;">
                             <img src="${cart[i].image}" class="card-img-top" alt="..." width=200px height=200px>
                             <div class="card-body">
                             <h5 class="card-title">${cart[i].name}</h5>
                             <p class="card-text">Precio: $${cart[i].price}</p>
                             <button id="${cart[i].id}" class="btn btn-danger" onclick="deleteFromCart(${cart[i].id});">Eliminiar del carrito</button>
                             </div>
                             </div>
                             </div>`
        }
    }
    if(total == 0){
        productosCart = `<h3>No hay productos en el carrito</h3>`
    }
    const container = document.getElementById('cart');
    container.innerHTML = productosCart;
    document.getElementById('total').innerHTML = total;
};


function deleteFromCart(id){
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let newCart = cart.filter(item => item.id != id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    getCart();
    console.log(id);
}



getCart();

window.deleteFromCart = deleteFromCart;