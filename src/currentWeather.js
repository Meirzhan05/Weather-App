import getData from "./fetchData";

const contentDiv = document.getElementById('content');

async function createCurrentWeatherUI(location="undefined") {
    let data;
    const type = "current";
    if (location == "undefined") {
        data = await getData(type);
    } else {
        data = await getData(type, location);
    }

    const city = document.createElement('div');
    city.id = "location";
    city.innerText = data.location.name + ", " + data.location.region;
    contentDiv.appendChild(city);

    const currentWeatherDiv = document.createElement('div');
    currentWeatherDiv.classList.add("weather-div");
    contentDiv.appendChild(currentWeatherDiv);

    const currentWeatherHeading = document.createElement('p');
    currentWeatherHeading.textContent = "CURRENT WEATHER";
    currentWeatherHeading.id = "current-weather-heading";
    currentWeatherDiv.appendChild(currentWeatherHeading);

    const weatherDescriptionDiv = document.createElement('div');
    weatherDescriptionDiv.id = "weather-desc-div";
    currentWeatherDiv.appendChild(weatherDescriptionDiv);

    const temperatureDiv = document.createElement('div');
    temperatureDiv.innerText = data.current.temp_c;
    temperatureDiv.id = "temp-div";
    weatherDescriptionDiv.appendChild(temperatureDiv);

    const tempMeasureSpan = document.createElement('span');
    tempMeasureSpan.innerText = "C";
    tempMeasureSpan.id = "temp-measure-span";
    temperatureDiv.appendChild(tempMeasureSpan);

    const detailsDiv = document.createElement('div');
    detailsDiv.id = "weather-details-div";
    weatherDescriptionDiv.appendChild(detailsDiv);

    const humidity = document.createElement('div');
    humidity.classList.add("weather-details-list");
    detailsDiv.appendChild(humidity);

    const humidityTitle = document.createElement('span');
    humidityTitle.textContent = "Humidity";
    humidity.appendChild(humidityTitle)

    const humidityValue = document.createElement('span');
    humidityValue .textContent = data.current.humidity;
    humidity.appendChild(humidityValue);

    const uv = document.createElement('div');
    uv.classList.add("weather-details-list");
    detailsDiv.appendChild(uv);

    const uvTitle = document.createElement('span');
    uvTitle.textContent = "UV";
    uv.appendChild(uvTitle);

    const uvValue = document.createElement('span');
    uvValue .textContent = data.current.uv;
    uv.appendChild(uvValue);

    const feelslike = document.createElement('div');
    feelslike.classList.add("weather-details-list");
    detailsDiv.appendChild(feelslike);

    const feelslikeTitle = document.createElement('span');
    feelslike.textContent = "Real feel";
    feelslike.appendChild(feelslikeTitle);

    const feelslikeValue = document.createElement('span');
    feelslikeValue.textContent = data.current.feelslike_c + "°";
    feelslike.appendChild(feelslikeValue);

    const condition = document.createElement('div');
    condition.innerText = data.current.condition.text;
    condition.id = "weather-condition";
    currentWeatherDiv.appendChild(condition);
}



export default createCurrentWeatherUI;