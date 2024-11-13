let UserInput = document.getElementById("input-text");
let qrcode = document.getElementById("qrcode");
let generatedImg = document.getElementById("qr-code-img");
let qrcontain = document.getElementById("qr-contian");

function Generate(){
    if(UserInput.value.length >0){
    generatedImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + UserInput.value;
    qrcode.classList.add("show-img");
}
else{
    alert("write something first");
    UserInput.classList.add('error');

    setTimeout(()=>{
        UserInput.classList.remove('error');

    },1000)
}
}