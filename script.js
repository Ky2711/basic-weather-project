// ts free
const API_KEY = "G48JXZYNS8DZKCY7TBXZKR2EB";

async function getWeatherData(location) {
	try {
		let rawData = await 
		fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?key=" + API_KEY);
		let data = await rawData.json();
		return data;
	} catch (error) {
		throw new Error("Something went wrong");
	}
}

export {getWeatherData}