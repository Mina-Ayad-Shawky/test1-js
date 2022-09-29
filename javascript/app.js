let button = document.querySelector("div button");
let div = document.querySelector(".p1 p");
let body = document.querySelector("body")



button.onclick = function () {
    if (div.classList.contains("darkmode")) {
        div.classList.remove("darkmode");
        button.classList.remove("darkmode");
        body.classList.remove("blackmode");
        button.textContent="Dark Mode"
        
    } else {
        div.classList.add("darkmode");
        button.classList.add("darkmode");
        body.classList.add("blackmode");
        button.textContent="Light Mode";
    }
}