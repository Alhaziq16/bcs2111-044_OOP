function getWeather() {
    const apiKey = "9fd7a449d055dba26a982a3220f32aa2";
    const places = document.getElementById("places");
    const city = places.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = document.getElementById("weather");
        weather.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Pressure: ${data.main.pressure} hPa</p>
          <p>Visibility: ${Math.round(data.visibility / 1000)} km</p>
          <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
          <p>Feels like: ${Math.round(data.main.feels_like - 273.15)}°C</p>
        `;
      })
      .catch(error => console.log(error));
  }
  
  function goBack() {
    window.history.back();
  }