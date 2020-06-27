
const key = "8093ecb5699e2795f029414c67d10a2b";
let city = document.getElementById("city");
let btn = document.getElementById("btn");
let image = document.getElementById("imgid");
let description = document.getElementById("descid");
let temp = document.getElementById("tempid");
let humadity = document.getElementById("humid");
let pressure = document.getElementById("pressid");
let windspeed = document.getElementById("windspid");
let winddirection = document.getElementById("directionid");
// click btn event
btn.addEventListener('click', fetchdata);

// fetch data from api async
function fetchdata() {
let url = `http://api.weatherstack.com/current?access_key=${key}&query=${city.value}`;
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onload = function () {

let response = JSON.parse(this.responseText);
// set header image
image.setAttribute("src", response.current.weather_icons[0]);
// set weather description
description.innerHTML = response.current.weather_descriptions[0];
// set temperature
temp.innerHTML = response.current.temperature;
// set humidity
humadity.innerHTML = response.current.humidity;
// set pressure
pressure.innerHTML = response.current.pressure;
// set wind Speed
windspeed.innerHTML = response.current.wind_speed;
// set wind direction
winddirection.innerHTML = response.current.wind_dir;
}
xhr.send();
}