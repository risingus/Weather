let appID = 'a324b7f2eafab98f6acaf474fbed1b4d';
let units = 'metric';


// PARA PESQUISAR por zip code e por cidade
// let searchMethod = 'q';
// function getSearchMethod(searchTerm) {
//     if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
//         searchMethod = 'zip';
//     else
//         searchMethod = 'q'
// }

function searchWeather(searchTerm) {
    //${searchMethod} no lugar do q depois do ? se for pesquisar mais que por cidade
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${appID}&units=${units}`).
    then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })  
};

function init(resultFromServer) {
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("./assets/img/clear.jpg")';
            break;

        case 'Clouds':
            document.body.style.backgroundImage = 'url("./assets/img/cloudy.jpg")';
            break;

        case 'Rain':
        case 'Drizzle':
            document.body.style.backgroundImage = 'url("./assets/img/rain.jpg")';
            break;

        case 'Mist':
            document.body.style.backgroundImage = 'url("./assets/img/misty.jpg")';
            break;

        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("./assets/img/storm.jpg")';
            break;

        case 'Snow':
            document.body.style.backgroundImage = 'url("./assets/img/snow.jpg")';
            break;

        default:
            document.body.style.backgroundImage = 'url("./assets/img/default.jpg")';
            break;
    }
}


document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;

    if(searchTerm)
        searchWeather(searchTerm);
})