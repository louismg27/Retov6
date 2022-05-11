'use strict';
import {  readProduct,calculate,trash} from "./AddCartShopping.js";

function DocReady() {
    readProduct();
    calculate();

}

document.addEventListener('DOMContentLoaded', DocReady);