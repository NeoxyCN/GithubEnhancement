// ==UserScript==
// @name         Github Enhancement
// @namespace    neoxycn.github.io
// @version      0.1
// @description  Github Enhancement
// @author       Neoxy
// @match        github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @homepageURL  https://github.com/NeoxyCN/GithubEnhancement
// ==/UserScript==

(function() {
    'use strict';

    //Private span color
    const elements = document.querySelectorAll('span');
    elements.forEach(element => {
        if (element.textContent === 'Private') {
            element.style.color = '#FF0000';
        }
    });
})();
