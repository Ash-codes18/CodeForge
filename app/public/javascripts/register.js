function popup(){
    document.getElementById("main2").classList.remove("hide");
    setTimeout(() => {
        window.location.href = "http://localhost:3000/";
    }, 3000);
}