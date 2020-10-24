var cc = {};
var username = "";
var password = "";
var isConfirmModalValueSet = false;

window.onload = function () {

    var u = document.querySelector('#username');
    var p = document.querySelector('#password');

    if (u && p) {

        chrome.storage.local.get("username", value => {
            u.value = value.username || 'not-set';
        })

        chrome.storage.local.get("password", value => {
            p.value = value.password || 'not-set';
        })

        setTimeout(function () {
            document.querySelector('input[value="Sign me in"]').click();

            chrome.storage.local.get("codesInJson", value => {
                cc = value.codesInJson || {};
            })

            setTimeout(function () {
                var text = document.querySelector('#code_card>p>strong').textContent
                var code = parseInt(text);

                document.querySelector('#code_card_value').value = getCode(code);
                document.querySelector('input[value="Authorise"]').click();
            }, 1000)
        }, 100)
    }

    setInterval(function () {

        if(isConfirmModalValueSet){
            return;
        }

        if(isEmpty(cc)){
            chrome.storage.local.get("codesInJson", value => {
                cc = value.codesInJson || {};
            });
            return;
        }

        let textObj = document.querySelector('#code_card>p>strong')

        if(!textObj){
            return;
        }

        let text = textObj.textContent
        let code = parseInt(text);

        let countOfCnfirmValuesSet = 0;

        for (let i of document.querySelectorAll('input[name="code_card_code"]')) {
            i.value = getCode(code);
            if(i.value){
                countOfCnfirmValuesSet++;
            }
        }

        if(countOfCnfirmValuesSet > 0){
            isConfirmModalValueSet = true;
        }

    }, 1000);
}

function getCode(key) {
    var jsonCC = JSON.parse(cc);
    return jsonCC[key];
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}
