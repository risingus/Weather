let appID = 'a324b7f2eafab98f6acaf474fbed1b4d';
let units = 'metric';
let lang = 'pt_br';


function searchWeather(searchTerm) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${appID}&units=${units}&lang=${lang}`).
    then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
};

function init(resultFromServer) {

    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let windSpeedElement = document.getElementById('windSpeed');
    let humidityElement = document.getElementById('humidity');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');

    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176  C';
    windSpeedElement.innerHTML = 'Velocidade do vento: ' + Math.floor(resultFromServer.wind.speed) + ' m/s';
    cityHeader.innerHTML = resultFromServer.name;
    humidityElement.innerHTML = 'Humidade: ' + resultFromServer.main.humidity + '%';

    showWeatherInfo();

}

function showWeatherInfo() {
    let weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.style.visibility = 'visible';

}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;

    if (searchTerm)
        searchWeather(searchTerm);
})