const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key : "67e098815f52e95ad17cc12ad0d8d4ae"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter (e) {
    if (e.keyCode === 13) {
        getInfo (input.value);
    }
}

async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();

    console.log(result);
    displayResult(result);
}

function displayResult(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;
    
    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `<span>Ressenti: </span>${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.innerHTML = `${result.weather[0].description}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = `<span>Min: </span>${Math.round(result.main.temp_min)}<span>°, Max: </span> ${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getOurDate() {
    const myDate = new Date ;
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let date = document.querySelector("#date");
    date.innerHTML = `${days[myDate.getDay()]} ${myDate.getDate()} ${months[myDate.getMonth()]}  ${myDate.getFullYear()}`;

};

gsap.from("#header", {y:-300, delay:0.2, duration:3, opacity:0.5, ease:"power4.out"})
gsap.from("#city", {y:-300, delay:1.2, duration:3, opacity:0.5, ease:"power4.out"})
gsap.from("#date", {y:-300, delay:2.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#temperature", {y:-300, delay:3.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#feelsLike", {y:-300, delay:4.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#conditions", {y:-300, delay:5.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#variation", {y:300, delay:6.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from(".link", {y:300, delay:7.2, duration:3, opacity:0, ease:"power4.out"})

