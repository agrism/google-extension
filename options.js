let username = document.getElementById('username');
let password = document.getElementById('password');
let input = document.getElementById('codesInJson');
let btn = document.getElementById('btn');

chrome.storage.local.get("codesInJson",value =>{
    console.log(value.codesInJson);
    input.value = value.codesInJson;
})

chrome.storage.local.get("username",value =>{
    console.log(value.username);
    username.value = value.username;
})

chrome.storage.local.get("password",value =>{
    console.log(value.password);
    password.value = value.password;
})

btn.addEventListener('click', function(){
    chrome.storage.local.set({username: username.value}, function() {
        console.log('new username: ' + username.value);
    });
    chrome.storage.local.set({password: password.value}, function() {
        console.log('new password: ' + password.value);
    });
    chrome.storage.local.set({codesInJson: input.value}, function() {
        console.log('new codes: ' + input.value);
    });
});