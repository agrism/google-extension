var cc = {};
var username = "";
var password = "";

window.onload = function () {
    console.log('loaded')

    var u = document.querySelector('#username');
    var p = document.querySelector('#password');

    if (u && p) {

        chrome.storage.local.get("username", value => {
            u.value = value.username || 'not-set';
        })

        chrome.storage.local.get("password", value => {
            p.value = value.password || 'not-set';
        })

        setTimeout(function (){
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
        },100)
    }
}

function getCode(key) {
    var jsonCC = JSON.parse(cc);
    return jsonCC[key];
}

