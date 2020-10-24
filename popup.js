'use strict';

let local = document.getElementById('local');
let prod = document.getElementById('prod');
let stageUs = document.getElementById('stageUs');

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

stageUs.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: 'https://admin.staging-manual-1.us.flynowpaylater.cloud'});
    });
};