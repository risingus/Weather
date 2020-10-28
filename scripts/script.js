let appID = 'a324b7f2eafab98f6acaf474fbed1b4d';
let units = 'metric';
let lang = 'en_us';


function searchWeather(searchTerm) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${appID}&units=${units}&lang=${lang}`).
    then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
};

function init(resultFromServer) {

    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let temp_minElement = document.getElementById('temp_min');
    let temp_maxElement = document.getElementById('temp_max');
    let windSpeedElement = document.getElementById('windSpeed');
    let feels_likeElement = document.getElementById('feels_like');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');

    weatherIcon.src = 'https://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176  C';
    temp_minElement.innerHTML = 'Min: ' +  Math.floor(resultFromServer.main.temp_min) + '&#176  C';
    temp_maxElement.innerHTML = 'Max: ' + Math.floor(resultFromServer.main.temp_max) + '&#176  C';
    windSpeedElement.innerHTML = 'Winds: ' + Math.floor(resultFromServer.wind.speed) + ' m/s';
    cityHeader.innerHTML = resultFromServer.name + ', ' +  resultFromServer.sys.country;
    feels_likeElement.innerHTML = 'Thermal Sensation: ' + resultFromServer.main.feels_like + '&#176  C';

    console.log(resultFromServer);

    showWeatherInfo();

}

function showWeatherInfo() {
    let weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.style.visibility = 'visible';
    document.getElementById('searchInput').value = '';

}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;

    if (searchTerm)
        searchWeather(searchTerm);
})

