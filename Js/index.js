'use strict';
import {  readProduct,calculate,trash} from "./AddCartShopping.js";
import {compCarShopping} from "./compCarShopping.js";

function DocReady() {
    compCarShopping();
    readProduct();
    calculate();


}

document.addEventListener('DOMContentLoaded', DocReady);