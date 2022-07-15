const celulares = [
    {
        id: 1,
        ruta: "./imagen/image-1.jpg",
        marca: "samsung",
        precio: "$5,200.00",
        ref: "Galaxy s52",
    },
    {
        id: 2,
        ruta: "./imagen/image-3.jpg",
        marca: "samsung",
        precio: "3,900.00",
        ref: "Galaxy A12",
    },
    {
        id: 3,
        ruta: "./imagen/image-11.jpg",
        marca: "samsung",
        precio: "7,000.00",
        ref: "Galaxy A32 (128gb/8gb RAM",
    },
    {
        id: 4,
        ruta: "./imagen/image-13.jpg",
        marca: "samsung",
        precio: "4,500.00",
        ref: "Galaxy A301",
    },
    {
        id: 5,
        ruta: "./imagen/image-15.jpg",
        marca: "samsung",
        precio: "$5,300.00",
        ref: "Galaxy A70",
    },
    {
        id: 6,
        ruta: "./imagen/image-16.jpg",
        marca: "samsung",
        precio: "$19,800.00",
        ref: "Galaxy Z fold 3",
    },
    {
        id: 7,
        ruta: "./imagen/image-17.jpg",
        marca: "samsung",
        precio: "$16,500.00",
        ref: "Galaxy s21",
    },
    {
        id: 8,
        ruta: "./imagen/image-1.jpg",
        marca: "samsung",
        precio: "$5,200.00",
        ref: "Galaxy s52",
    },
];

const shoppingCart = {};

const containerProduct = document.getElementById("product-list");

containerProduct.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
        const id = parseInt(event.target.id);

        const [currentProduct] = celulares.filter(
            (element) => element.id === id
        );

        if (shoppingCart[currentProduct.id]) {
            shoppingCart[currentProduct.id].cantidad++;
        } else {
            shoppingCart[currentProduct.id] = currentProduct;
            shoppingCart[currentProduct.id].cantidad = 1;
        }

        const contentCart = document.querySelector(".content_cart");

        let html = "";

        Object.values(shoppingCart).forEach(
            ({ ruta, precio, ref, cantidad }) => {
                html += `
                <div>
                    <img src="${ruta}" alt="" />
                    <h5>${ref}</h5>
                    <p>${precio}</p>
                    
                        <span class='rest'>-</span> 
                        <b>${cantidad}</b> 
                        <button class="del"></button>
                </div>
            `;
            }
        );


        contentCart.innerHTML = html;
    }
});

function showProducts(celulares) {
    let products = "";

    for (let i = 0; i < celulares.length; i++) {
        products += `<div class="card zoom">
                        <img class="width" src="${celulares[i].ruta}" alt="">
                        <div class="borde">
                            <p class="p">${celulares[i].marca}</p>
                            <h3 class="precio">${celulares[i].ref}</h3>
                            <p class="p">presios:</p>
                            <h3 class="precio">${celulares[i].precio}</h3>
                            <button id="${celulares[i].id}" class="btn btn-primary">Añadir carro</button>
                            <div class="carrito">
                                <img class=" img-carrito" src="./imagen/shopping-cart-3.svg" alt="carrito">
                            </div>
                            <div class="corazon">
                                <img class="img-corazon" src="./imagen/heart-1.svg" alt="corazon">
                            </div>
                        </div>
                    </div>`;
    }

    containerProduct.innerHTML = products;
}

showProducts(celulares);

function toggleMenu() {
    const div = document.getElementById('cart');
    div.classList.toggle('hidden');
}

showProducts(celulares);


window.toggleMenu = toggleMenu;