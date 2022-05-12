'use strict';
import {  readProduct,calculate,trash} from "./AddCartShopping.js";
import {compCarShopping} from "./compCarShopping.js";
import header from "./header.js";
import {compBanner} from "./compBanner.js";
import {tabselector} from "./funTabs.js";

function DocReady() {
    header();
    compBanner();
    compCarShopping();
    readProduct();
    calculate();
    tabselector();




}

document.addEventListener('DOMContentLoaded', DocReady);