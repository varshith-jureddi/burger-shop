const opt = document.getElementById("options");
const options = document.getElementById("nav-links");


opt.addEventListener("click",(e) => {
    if(options.className==="nav-links"){
        options.classList.add("active");
    }else{
        options.classList.remove("active");
    }
})


options.addEventListener("click", (e) => {
    // options.classList.remove("active");
    if(options.className==="nav-links"){
        options.classList.add("active");
    }else{
        options.classList.remove("active");
    } 
})