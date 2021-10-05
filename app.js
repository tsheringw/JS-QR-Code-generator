const input = document.getElementById("data");
const button = document.getElementById("btn");
const qrImg = document.getElementById("img");

button.addEventListener("click", ()=>{
    let data = input.value;
    if(data.length>0){
        let qrsource="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+data;

        qrImg.src=qrsource;
    }
})