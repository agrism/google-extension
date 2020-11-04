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

/*
            green: #97d697;
            red: #cb8383;
            violet: #c5afe0;
 */

var colorGreen = '#acd4ac';
var colorRed = '#ca9797';
var colorViolet = '#d3c7e5';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    console.log(tab.url);

    if (changeInfo.status == 'complete') {
        url = tab.url ?? "";

        if (url != undefined) {


            if (url.includes('https://admin.legacy.test')) {
                chrome.tabs.executeScript(tabId, {
                    code: 'document.body.style.backgroundColor="' + colorGreen + '";document.body.style.backgroundImage = "url(\'https://raw.githubusercontent.com/agrism/google-extension/master/images/flag-gb-light.png\')";'
                });
            } else if (url.includes('https://admin.travelfund.co.uk')) {
                chrome.tabs.executeScript(tabId, {
                    code: 'document.body.style.backgroundColor="' + colorRed + '";document.body.style.backgroundImage = "url(\'https://raw.githubusercontent.com/agrism/google-extension/master/images/flag-gb-light.png\')";'
                });
            } else if (url.includes('https://admin.staging-manual-1.us.flynowpaylater.cloud/')) {
                chrome.tabs.executeScript(tabId, {
                    code: 'document.body.style.backgroundColor="' + colorViolet + '";document.body.style.backgroundImage = "url(\'https://raw.githubusercontent.com/agrism/google-extension/master/images/flag-us-light.png\')";'
                });
            } else if (url.includes('https://admin.us.flynowpaylater.com/')) {
                chrome.tabs.executeScript(tabId, {
                    code: 'document.body.style.backgroundColor="' + colorRed + '";document.body.style.backgroundImage = "url(\'https://raw.githubusercontent.com/agrism/google-extension/master/images/flag-us-light.png\')";'
                });
            }
        }
    }

})
;