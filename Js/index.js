'use strict';
import {  readProduct,calculate} from "./AddCartShopping.js";

function DocReady() {
    readProduct();
    calculate();


}

document.addEventListener('DOMContentLoaded', DocReady);