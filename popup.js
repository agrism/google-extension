'use strict';

let local = document.getElementById('local');

let prodUk = document.getElementById('prodUk');
let stageUk = document.getElementById('stageUk');

let prodUs = document.getElementById('prodUs');
let stageUs = document.getElementById('stageUs');

local.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: 'https://admin.legacy.test'});
    });
};

stageUk.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: 'https://admin.staging-manual-2.gb.flynowpaylater.cloud/'});
    });
};

prodUk.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: 'https://admin.gb.flynowpaylater.com'});
    });
};

stageUs.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: 'https://admin.staging-manual-1.us.flynowpaylater.cloud'});
    });
};

prodUs.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: 'https://admin.us.flynowpaylater.com'});
    });
};