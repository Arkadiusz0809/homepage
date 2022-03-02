console.log("cześć!");

let przycisk = document.querySelector(".przycisk");
let naglowek = document.querySelector(".naglowek");

przycisk.addEventListener("click", () => {
    naglowek.innerHTML = "Arkadiusz Toruń";
});

przycisk.addEventListener("click", () =>{
    naglowek.classList.add("nowaklasa"); 
});

console.log(przycisk);
console.log("Trochę słabo wiem, ale może będzie lepiej");