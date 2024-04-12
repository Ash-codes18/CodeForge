var popup=document.getElementById("popup");
var closebtn=document.querySelector("#closebtn");


var hostbtn=document.querySelector("#hostbtn");

hostbtn.addEventListener("click",function(){
    popup.classList.remove("hide")
})
closebtn.addEventListener("click",function(){
    popup.classList.add("hide");
})

document.getElementById("submit").addEventListener("click",function(){
    popup.classList.add("hide");

})