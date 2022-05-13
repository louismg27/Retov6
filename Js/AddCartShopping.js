'use strict';
import {Producto} from "../Models/producto.js";

let productos = [
    new Producto("Margherita", 100, 100, "S: 29 Dhs I M: 39 Dhs I L: 49 Dhs", "/Images/foods/image1.PNG", 1000,"Mozarella,Red Sauce"),
    new Producto("Double Down", 200, 200, "S: 39 Dhs I M: 49 Dhs I L: 59 Dhs", "/Images/foods/image2.PNG", 200,"Smokey Joe"),
    new Producto("Smokey Joe", 300, 300, "S: 39 Dhs I M: 49 Dhs I L: 59 Dhs", "/Images/foods/image3.PNG", 700,"Tandoori Timeout"),
    new Producto("Tandoori Timeout", 100, 100, "S: 39 Dhs I M: 49 Dhs I L: 59 Dhs", "/Images/foods/image4.PNG", 1000,"Meat Eater"),
    new Producto("Meat Eater", 200, 200, "S: 39 Dhs I M: 49 Dhs I L: 59 Dhs", "/Images/foods/image5.PNG", 200,"Mozarella,Red Sauce"),
    new Producto("Mother Earth", 300, 300, "S: 39 Dhs I M: 49 Dhs I L: 59 Dhs", "/Images/foods/image6.PNG", 700,"Mozarella,Red Sauce"),
];

let productsInCar = [];

const readProduct = () => {

    // Inyeccion de Productos en HTML
    const compProducts = document.querySelector("#compProducts");//seleccion donde inyectar
    productos.forEach((element) => {
        // style="width: 100%; height: 8rem; "
        compProducts.innerHTML += `
<div class="cardc   gap-2 productoN ">
    <div class="container p-0 rounded-circle coverx" >
        <img id="imagen" src="${element.imagen}" alt="">
    </div>
    <div class="container cardc_description  d-flex flex-column">
        <div class="d-flex container  justify-content-center h4 fw-bold" id="nombre">
            ${element.nombre}
        </div>  
              
        <div class="d-flex container justify-content-center text-muted" id="description" style="font-size: 12px;">
                  ${element.description}
        </div>
        
          <div class="d-flex container justify-content-center text-muted mt-2" id="horario" style="font-size: 12px;">
                  ${element.horario}
        </div>
        
 
      <div class="hidden" id="precio">${element.precio}</div>
      <div class="hidden" id="baseprecio">${element.basePrecio}</div>
             <div class="hidden" id="id">${element.id}  </div>
        <button class="btn btn-danger w-100 mt-3" id="selectproduct" ">SELECT</button>
        
    </div>
</div> 
 
         `;

    });
    // Escuchar cada click del listado de productos
    const productsN = document.querySelectorAll(".productoN");

    // compProducts.addEventListener('click',(event) => {
    // console.log(event.currentTarget);
    // })
    productsN.forEach((item) => {
        const nombre = item.querySelector('#nombre').innerHTML;
        const description = item.querySelector('#description').innerHTML;
        const horario = item.querySelector('#horario').innerHTML;
        const precio = item.querySelector('#precio').innerHTML;
        const baseprecio = item.querySelector('#baseprecio').innerHTML;
        const imagen = item.querySelector('#imagen').src;
        const id = item.querySelector('#id').innerHTML;

        item.addEventListener('click', (e) => {

            let producto = {
                nombre: nombre,
                description: description,
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
    readCarShopping(productsInCar);
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

    if (productsInCar.length > 0) {
        productsInCar.forEach((element) => {
                const contenthtml = `<div class="d-flex  flex-row   w-100 mt-1 mb-1 itemCarShopping">

    <!--                  imagen-->
    <div class="container p-0   align-self-center " style="height: 70px; width: 100% ;">
        <img class="img-responsive rounded  " src="${element.imagen}" alt="Chania" width="100%"
             height="100%">
    </div>
    <!--                  descripcion-->
    <div class="container p-2  ">
        <div class="font-weight-bold h6">
            ${element.nombre}
        </div>
        <div id="id" style="display: none">
            ${element.id}
        </div>
        <div class="font-weight-light h6 small ">
            ${element.description}
        </div>
    </div>
    <!--    Precio y botones +- -->
    <div class="d-flex flex-row container   justify-content-between m-0 p-0 ">

        <div class="container m-0 p-0">
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
    </div>

    <div class="container  align-self-center justify-content-center  m-1 pe-1" style="width: 80px;">

        <i class="gg-trash" id="trash"></i>

    </div>

</div>`;
                itemcar.innerHTML += contenthtml;
            }
        );
    }
    if (productsInCar.length == 0) {
        itemcar.innerHTML += `<div class="bg-light justify-content-center text-sm-center text-lg-center text-md-center h6 align-self-center mt-1 p-0">
                 Your Car is Empty
         </div>`;
    }


    readItems();
    trash();

}


//*************************************************************************
//*************************************************************************
//*************************************************************************
//*************************************************************************
// CONTADOR DE ITEMS
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
// ELIMINACION DE ITEMS
const trash = () => {
    const itemsCar = document.querySelectorAll('.itemCarShopping');
    itemsCar.forEach((item) => {
        const idproduct = +item.querySelector('#id').innerHTML;


        item.addEventListener('click', (e) => {
            console.log("sehizoclick");

            const trash = item.querySelector('#trash');
            if (e.target == trash) {

                productsInCar.forEach((element, index) => {
                    const idelement = +element.id;
                    if (idelement == idproduct) {
                        productsInCar.splice(index, 1);
                    }

                });
                readCarShopping(productsInCar);
            }


        });
    });
}
//CALCULO DEL TOTAL DE ITEMS
const calculate = () => {
    const detalle = document.querySelector('#detalle');

    let subtotal = 0;
    let delivery = 20;
    let vat = 30;
    let total = 0;
    productsInCar.forEach((element, index) => {
        var precio = +element.precio;
        subtotal = subtotal + precio;
        delivery = (index + 1) * 10;
        var cvat = (subtotal + delivery) * 0.05;
        vat = cvat;

        total = subtotal + delivery + vat;

    });
    detalle.innerHTML = '';
    detalle.innerHTML += `  <div style="background-color: whitesmoke;">
                    <!--SubTotal -->
                    <div class="d-flex flex-row w-100 m-0 p-2 justify-content-between  border-bottom">
                        <div class="d-flex  " >
                            Subtotal
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

                    <div class="btn  bg-danger container w-100 m-0 p-2 fw-bold text-white text-sm-center shadow"
                         style="width: 100%;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;">
                        CHECKOUT
                    </div>

                </div>`;


}
export {readProduct, calculate, trash}