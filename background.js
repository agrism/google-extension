'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({})
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

var url = "";

var colorGreen = '#acd4ac';
var colorRed = '#ca9797';
var colorViolet = '#d3c7e5';

function getFlagScript(country, color) {
    return 'var element=document.createElement("img");element.src="https://raw.githubusercontent.com/agrism/google-extension/master/images/flag-' + country + '.png";element.style="position:fixed;left:0;bottom:10px;height:60px;";document.body.appendChild(element);'
}

function getBackGroundScript(country, color) {
    // return 'document.body.style.backgroundColor="' + color + '";document.body.style.backgroundImage = "url(\'https://raw.githubusercontent.com/agrism/google-extension/master/images/flag-'+country+'-light.png\')";'
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status == 'complete') {
        url = tab.url ?? "";

        if (url != undefined) {

            if (url.includes('https://admin.flynowpaylater.test')) {
                chrome.tabs.executeScript(tabId, {
                    code: getFlagScript('gb')
                });
            } else if (url.includes('https://admin.gb.flynowpaylater.com')) {
                chrome.tabs.executeScript(tabId, {
                    code: getFlagScript('gb')
                });
            } else if (url.includes('https://admin.us.flynowpaylater.com')) {
                chrome.tabs.executeScript(tabId, {
                    code: getFlagScript('us')
                });
            } else if (url.includes('https://admin.staging-manual-2.gb.flynowpaylater.cloud')) {
                chrome.tabs.executeScript(tabId, {
                    code: getFlagScript('gb')
                });
            } else if (url.includes('https://admin.staging-manual-1.us.flynowpaylater.cloud')) {
                chrome.tabs.executeScript(tabId, {
                    code: getFlagScript('us')
                });
            }
        }
    }
});