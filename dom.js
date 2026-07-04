import { getWeatherData } from "./script.js";

const searchBar = document.getElementById("search-bar");

searchBar.addEventListener('keydown', () => {

    if (event.key === 'Enter') {
        event.preventDefault();
        let weatherData = getWeatherData(searchBar.value);
        weatherData.then((data) => {setInformation(data)});
    }

});

const placeName = document.getElementById("place-name");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const description = document.getElementById("description");

function setInformation(weatherObject) {

    let currentPlace = weatherObject.resolvedAddress;
    let currentTemp = weatherObject.currentConditions.temp;
    let currentFeel = weatherObject.currentConditions.feelslike;
    let currentHumidity = weatherObject.currentConditions.humidity;
    let currentDescription = weatherObject.description;

    placeName.innerHTML = currentPlace;
    temperature.innerHTML = "Temperature: " + currentTemp + " Fahrenheit";
    feelsLike.innerHTML = "Feels like: " + currentFeel + " Fahrenheit";
    humidity.innerHTML = "Humidity: " + currentHumidity;
    description.innerHTML = currentDescription;

}

const convertButton = document.getElementById("convert");
let fahrenheit = true;
convertButton.addEventListener('click', () => {

    let temp = temperature.innerHTML.split(" ")[1];
    let feels = feelsLike.innerHTML.split(" ")[2];

    if (fahrenheit) {

        let celsiusTemp = (temp - 32) * (5/9);
        let feelsLikeTemp = (feels - 32) * (5/9);

        celsiusTemp = celsiusTemp.toFixed(1);
        feelsLikeTemp = feelsLikeTemp.toFixed(1);

        temperature.innerHTML = "Temperature: " + celsiusTemp + " Celsius";
        feelsLike.innerHTML = "Feels like: " + feelsLikeTemp + " Celsius";

        fahrenheit = false;

    } else {

        let fahrenheitTemp = temp * (9/5) + 32;
        let feelsLikeTemp = feels * (9/5) + 32;

        fahrenheitTemp = fahrenheitTemp.toFixed(1);
        feelsLikeTemp = feelsLikeTemp.toFixed(1);

        temperature.innerHTML = "Temperature: " + fahrenheitTemp + " Fahrenheit";
        feelsLike.innerHTML = "Feels like: " + feelsLikeTemp + " Fahrenheit";

        fahrenheit = true;

    }
});

const savedPlacesBtn = document.getElementById("saved-places");
const sidebar = document.getElementById("sidebar");

savedPlacesBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});