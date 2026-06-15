import { getWeatherData } from "./script.js";

const searchBar = document.getElementById("search-bar");

searchBar.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let weatherData = getWeatherData(searchBar.data);
    }
});