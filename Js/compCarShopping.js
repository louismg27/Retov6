const compCarShopping = () => {
  const cart = document.querySelector('#compcarshopping');

  cart.insertAdjacentHTML("afterbegin", `      <div class="container p-0  d-flex flex-column  border border-1 shadow  bg-light m-1 "
             style="width: 340px; border-radius: 1rem;">
            <!-- CAR -->
            <div class="container d-flex flex-row p-2  ">
                <i class="fa fa-shopping-cart mr-2"gProducts style="font-size:29px;color:red"></i>
                <div style="font-weight: bolder;">CART</div>
            </div>

            <!-- status -->
            <div class="container d-flex border-top border-bottom w-100 p-1 m-0 align-self-center  " id="statusContainer">
                <div class="container  border mt-1 mb-1   justify-content-between p-1" style="border-radius: 8px" id="car_status">  </div>
            </div>

            <!-- detalle -->
            <div class="container d-flex flex-column w-100 m-0 p-0" id="detalle">

            </div>

        </div>`);
}

export {compCarShopping}