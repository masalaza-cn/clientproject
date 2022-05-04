let cityName;
let stateCode;
let date;
let weatherApi;

$(".submit").click(function () {
  cityName = $("#cityInput").val();
  stateCode = $("#stateInput").val();

  console.log(cityName);
  console.log(stateCode);

  date = new Date().toISOString().split("T")[0];
  $("#date").html(date);

  weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode}&units=imperial&appid=3bb00f30e525b91a1deb9cbd20254379`;

  fetch(weatherApi)
    .then(function (response) {
      return response.json();
    })

  
    .then(function (data) {
      $("#city").html(`${data.name}, ${data.sys.country}`);
      $("#temp").html(`${data.main.temp}°`);
      $("#feelsLike").html(`Feel like ${data.main.feels_like}°`);
      $("#conditions").html(`${data.weather[0].description}`);
      $("#min").html(`Min Temp: ${data.main.temp_min}°`);
      $("#max").html(`Max Temp: ${data.main.temp_max}°`);
    });
});
