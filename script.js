// ts free
const API_KEY = "G48JXZYNS8DZKCY7TBXZKR2EB";
const API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_PARAMS = "?key=G48JXZYNS8DZKCY7TBXZKR2EB&&include=hours,current,alerts,fcst";

async function getWeatherData(location) {
	try {
		let rawData = await 
		fetch(API_URL + location + API_PARAMS);
		let data = await rawData.json();
		console.log(data);
		return data;
	} catch (error) {
		throw new Error("Something went wrong");
	}
}

export {getWeatherData}