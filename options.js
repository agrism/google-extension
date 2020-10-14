let username = document.getElementById('username');
let password = document.getElementById('password');
let input = document.getElementById('codesInJson');
let btn = document.getElementById('btn');
let msg = document.getElementById('msg');

chrome.storage.local.get("codesInJson",value =>{
    console.log(value.codesInJson);
    input.value = value.codesInJson;
})

chrome.storage.local.get("username",value =>{
    username.value = value.username;
})

chrome.storage.local.get("password",value =>{
    password.value = value.password;
})

btn.addEventListener('click', function(){
    chrome.storage.local.set({username: username.value}, function() {});
    chrome.storage.local.set({password: password.value}, function() {});
    chrome.storage.local.set({codesInJson: input.value}, function() {});

    msg.style.display = 'block';

    setTimeout(function (){
        msg.style.display = 'none';
    },1000);
});