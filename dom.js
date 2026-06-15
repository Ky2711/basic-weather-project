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
const description = document.getElementById("description");

function setInformation(weatherObject) {
    let currentPlace = weatherObject.resolvedAddress;
    let currentTemp = weatherObject.currentConditions.temp;
    let currentDescription = weatherObject.description;

    placeName.innerHTML = currentPlace;
    temperature.innerHTML = currentTemp + " Fahrenheit";
    description.innerHTML = currentDescription;
}