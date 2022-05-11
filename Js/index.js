'use strict';
import {  readProduct,calculate,trash} from "./AddCartShopping.js";
import {compCarShopping} from "./compCarShopping.js";
import header from "./header.js";

function DocReady() {
    header();
    compCarShopping();
    readProduct();
    calculate();


}

document.addEventListener('DOMContentLoaded', DocReady);