const API_KEY = '5e1f5d1b978945f48b111000241201';

async function fetchWeatherAPI(type, location) {
    const url = `http://api.weatherapi.com/v1/${type}.json?key=${API_KEY}&q=${location}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        alert(err);
    }
}

async function getData(type, position="nothing") {
    let data;
    if (position === "nothing") {
        data = getUserCurrentLocation()
                    .then(location => fetchWeatherAPI(type, location.latitude + "," + location.longitude))
                    .catch(error => {
                        alert(error);
                    });

            
    } else {
        data = fetchWeatherAPI(type, position);
    } 
    return data;
}

async function getUserCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = position.coords;
        resolve(location); // Resolve with the location object
      },
      error => reject(error) // Reject if there's an error
    );
  });
}

export default getData;