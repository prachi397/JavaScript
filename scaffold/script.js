document.getElementById('location-form').addEventListener('submit', getWeather);

async function getWeather(e) {
  //Write you code logic here

  // Error should be very specific
  // Error: Failed to fetch weather data,   should always fetch this error in case of any failure otherwise you test cases will get failed.
  e.preventDefault();
  const location = document.getElementById('location-input').value;
  const weatherDataDiv = document.getElementById('weather-data');
  weatherDataDiv.innerHTML = "";
  weatherDataDiv.style.color="white";
  const apiKey = '37f22d0cd84244405b150251037e64b8';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
  try {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      return weatherDataDiv.innerHTML=`
      <h1>${result.name}</h1>
      <p>${result.weather[0].description}</p>
      <p>${result.main.temp} °C</p>
      `;
    } else {
      throw new Error('Error: City not found');
    }
  } catch (err) {
    weatherDataDiv.textContent = 'Error: Failed to fetch weather data';
  }
}