'use strict';
import {Producto} from "../Models/producto.js";

let productos = [
    new Producto("Vegan", 100, 100, "doming", "/Images/foods/image1.PNG", 1000),
    new Producto("Heat", 200, 200, " lun", "/Images/foods/image2.PNG", 200),
    new Producto("Orange", 300, 300, "mier", "/Images/foods/image3.PNG", 700),
    new Producto("Italian", 100, 100, "doming", "/Images/foods/image4.PNG", 1000),
    new Producto("Egg", 200, 200, " lun", "/Images/foods/image5.PNG", 200),
    new Producto("Tv", 300, 300, "mier", "/Images/foods/image6.PNG", 700),
    new Producto("Window", 200, 200, " lun", "/Images/foods/image7.PNG", 200),
    new Producto("Keyboard", 300, 300, "mier", "/Images/foods/image8.PNG", 700)
];

let productsInCar = [];

const readProduct = () => {

    // Inyeccion de Productos en HTML
    const gProducts = document.querySelector("#gProducts");//seleccion donde inyectar
    productos.forEach((element) => {

        gProducts.innerHTML += `<div class="productoN card-image-title-description col-lg-3 col-md-6 col-sm-5">
            <div class="card mt-2" style="width: 16rem; height: 8rem; ">
                <div class="card-img-wrapper ">
                    <img class="card-img-top" id="imagen" src=${element.imagen} alt="Card image cap">
                </div>
                <div class="card-body ">
                    <h5 class="card-title" id="nombre">${element.nombre}</h5> 
                      <p class="card-text" id="id" style="display: none" >${element.id}</p>
                      <p class="card-text" id="precio" style="display: none">${element.precio}</p>
                      <p class="card-text" id="conteo" style="display: none">${element.count}</p>
                      <p class="card-text" id="baseprecio" style="display: none">${element.basePrecio}</p>
                    <p class="card-text" id="ingrediente">ingre</p>
                    <p class="card-text" id="horario">${element.horario}</p>
                    <button id="selectproduct" href="#" class="btnProducts btn btn-danger btn-block">SELECT</button>
                </div>
            </div>
            </div> 
         `;

    });
    // Escuchar cada click del listado de productos
    const productsN = document.querySelectorAll(".productoN");
    // gProducts.addEventListener('click',(event) => {
    // console.log(event.currentTarget);
    // })
    productsN.forEach((item) => {
        const nombre = item.querySelector('#nombre').innerHTML;
        const ingrediente = item.querySelector('#ingrediente').innerHTML;
        const horario = item.querySelector('#horario').innerHTML;
        const precio = item.querySelector('#precio').innerHTML;
        const baseprecio = item.querySelector('#baseprecio').innerHTML;
        const imagen = item.querySelector('#imagen').src;
        const id = item.querySelector('#id').innerHTML;

        item.addEventListener('click', (e) => {
            let producto = {
                nombre: nombre,
                ingrediente: ingrediente,
                horario: horario,
                precio: precio,
                imagen: imagen,
                baseprecio: baseprecio,
                conteo: 1,
                id: id
            };
            fillCarShopping(producto);
            calculate();
        });

    });

}
const check = () => {
    const productsN = document.querySelectorAll(".productoN");

    productsN.forEach((item) => {

        item.addEventListener('click', (event) => {
            const idproductselected = +item.querySelector('#id').innerHTML;
            const selectproduct = item.querySelector('#selectproduct');
            console.log("click");

            productsInCar.forEach((element) => {

                const idproductN = +element.id;
                if (event.target == selectproduct) {
                    if (idproductN == idproductselected) {
                        element.conteo += 1;
                    }
                }
                const baseprecio = +element.baseprecio;
                const preciototal = baseprecio * element.conteo;
                element.precio = preciototal;

            });

        },{once:true});
    });
}

const readItems = () => {
    const itemsCar = document.querySelectorAll('.itemCarShopping');
    itemsCar.forEach((item) => {
        const idproductselected = +item.querySelector('#id').innerHTML;
        item.addEventListener('click', (e) => {
            const buttonplus = item.querySelector('#buttonplus');
            const buttonminus = item.querySelector('#buttonminus');

            productsInCar.forEach((element) => {

                const idproductN = +element.id;
                if (e.target == buttonplus) {
                    if (idproductN == idproductselected) {
                        element.conteo += 1;
                    }
                } else if (e.target == buttonminus) {
                    if (idproductN == idproductselected && element.conteo > 1) {
                        element.conteo -= 1;
                    }
                }
                const baseprecio = +element.baseprecio;
                const preciototal = baseprecio * element.conteo;
                element.precio = preciototal;

            });
            //
            calculate();
            //Volvemos a leer data en el car shopping
            readCarShopping(productsInCar);
        });
    });
}

const calculate = () => {
    const detalle = document.querySelector('#detalle');

    let subtotal = 0;
    let delivery = 20;
    let vat =30;
    let total =0;
    productsInCar.forEach((element,index) => {
        var precio = +element.precio;
        subtotal = subtotal +precio ;
        delivery =(index+1)*10;
        var cvat = (subtotal+delivery)*0.05;
        vat =cvat;

        total =subtotal+delivery+vat;

    });
    detalle.innerHTML='';
    detalle.innerHTML+=`  <div style="background-color: whitesmoke;">
                    <!--SubTotal -->
                    <div class="d-flex flex-row w-100 m-0 p-2 justify-content-between  border-bottom">
                        <div class="d-flex  " >
                            subtotal
                        </div>
                        <div class="foods__container_right-detail-subtotal"id="subtotal">
                             ${subtotal}
                        </div>
                    </div>

                    <!--Delivery change-->
                    <div class="d-flex flex-row w-100 m-0 p-2 justify-content-between p-0 border-bottom">
                        <div class="d-flex  ">
                            Delivery Charge
                        </div>
                        <div class="foods__container_right-detail-subtotal" id="delivery">
                             ${delivery}
                        </div>
                    </div>

                    <!--VAT -->
                    <div class="d-flex flex-row w-100 m-0 p-2 justify-content-between p-0 border-bottom">
                        <div class="d-flex  ">
                            VAT 5%
                        </div>
                        <div class="foods__container_right-detail-subtotal" id="vat">
                             ${vat}
                        </div>
                    </div>

                    <!--TOTAL -->
                    <div class="d-flex flex-row w-100 m-0 p-2 justify-content-between p-0 border-bottom  fw-bold">
                        <div class="d-flex  ">
                            TOTAL
                        </div>
                        <div class="foods__container_right-detail-subtotal" id="total">
                              ${total}
                        </div>
                    </div>

                </div>
                <!--CHECKOUT -->
                <div class="container p-0 m-0 d-flex justify-content-center align-self-center">

                    <div class="btn btn-danger container w-100 m-0 p-2 fw-bold text-white text-sm-center shadow"
                         style="width: 100%;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;">
                        CHECKOUT
                    </div>

                </div>`;


}

const fillCarShopping = (producto) => {
    const idproductoToinsert = +producto.id;
    let check = 0;
    productsInCar.forEach((item) => {
        if (item.id == idproductoToinsert) {
            check = 1;
        }
    });
    if (check == 0) {
        productsInCar.push(producto);
    }
    //Escaneamos el array y actualizamos en cart
    readCarShopping(productsInCar);
}

//Escaneamos el array y actualizamos en cart
const readCarShopping = (productsInCar) => {
    const itemcar = document.querySelector('#car_status');
    itemcar.innerHTML = '';
    productsInCar.forEach((element) => {
            const contenthtml = `       
              <div class="d-flex  flex-row   w-100 mt-1 mb-1 itemCarShopping" >
                <div class="container p-0   align-self-center " style="height: 70px; width: 100% ;">
                    <img class="img-responsive rounded  " src="${element.imagen}" alt="Chania" width="100%"
                         height="100%">
                </div>
                <div class="container p-2  ">
                    <div class="font-weight-bold h6">
                        ${element.nombre}
                    </div>
                    <div id="id" style="display: none">
                             ${element.id}
                    </div>
                    <div class="font-weight-light h6 small ">
                        Large (10")
                    </div>
                </div>
                <div class="container p-0 font-weight-bold   align-self-center m-0">
                    <div class="container p-0 d-flex justify-content-center   ">
                        ${element.precio}
                    </div>
                    <div class="container d-flex flex-column w-100 p-0 mt-2" id="buyItemsButtons">
                        <div class="container d-flex flex-row justify-content-between p-0 m-0   w-100   ">
                            <button
                                    class="button-plus btn btn-outline-dark button-plus align-self-center p-0" id="buttonplus"
                                    style="width: 30px;height: 30px;">
                                +
                            </button>
                            <div class="fw-normal h6 p-0 m-0 align-self-center">
                                ${element.conteo}
                            </div>
                            <div class="button-minus btn btn-outline-dark align-self-center p-0" id="buttonminus"
                                 style="width: 30px;height: 30px;">
                                -
                            </div>

                        </div>
                    </div>
                </div>
            </div>`;
            itemcar.innerHTML += contenthtml;
        }
    );
    readItems();

}

// const buttonplus = document.querySelector('#buttonplus');
// const buttonminus = document.querySelector('#buttonminus');
// buttonplus.addEventListener('click', (e) => {
//     element.conteo +=1;
//     console.log(element.conteo);
// });
// buttonminus.addEventListener('click', (e) => {
//     console.log("menos");
// });


export {readProduct,   calculate}