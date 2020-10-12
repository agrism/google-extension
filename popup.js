'use strict';

// var localUrl = 'https://admin.legacy.test';
// var prodlUrl = 'https://admin.travelfund.co.uk';

let local = document.getElementById('local');
let prod = document.getElementById('prod');



local.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: 'https://admin.legacy.test'});
    });
};

prod.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: 'https://admin.travelfund.co.uk'});
    });
};
