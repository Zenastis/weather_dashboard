


function forecast (searchValue){
    if (!searchValue) {
        return;
    }
    var forecastApi = `api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid={54e1375c02bb77b1a951b0a2a1264c0d}`
    fetch(forecastApi)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            var forecast2 = document.querySelector("#forecast");
            forecast2.innerHTML = '<h4 class="mt-3">5day forecast</h4';
            forecastElement = document.createElement('div');
            forecastElement.className = '"row"';

            for (var i = 0; i < data.list.length; i++) {
                if (data.list[i].dt_txt.indexOf('15:00:00') !== -1) {
                    var col = document.createElement('div');
                    col.classList.add('col-md-2');
                    var card = document.createElement('div');
                    card.classList.add('card', 'bg-primary', 'text-white');
                    var wind = document.createElement('p');
                    wind.classList.add('card-text');
                    wind.textContent= `Wind Speed: ${data.list[i].wind.speed} mph`;
                    var humidity = document.createElement('p');
                    humidity.classList.add('card-text');
                    humidity.textContent = `Humidity: ${data.list[i].main.humidity} %`
                    var body = document.createElement('div');
                    body.classList.add('card-body', 'p-2');
                    var title = document.createElement('h5');
                    title.classList.add('card-title');
                    title.textContent = new Date(
                        data.list[i].dt_txt
                    ).toLocaleDateString();
                    var img = document.createElement('img');
                    img.setAttribute(
                        'src',
                        `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
                    );
                    var para1 = document.createElement('p');
                    para1.classList.add('card-text');
                    para1.textContent = `Temp: ${data.list[i].main.temp_max} degrees`;
                    var para2 = document.createElement('p');
                    para2.classList.add('card-text');
                    para2.textContent = `Humidity: ${data.list[i].main.humidity} %`;
                    
                    col.appendChild(card);
                    body.appendChild(title, img, wind, humidity, para1, para2);
                    card.appendChild(body)
                    forecast2.appendChild(col);
                }
            }
        });
}


function oneCall (){
    var requestOneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=35.2271&lon=-80.8431&exclude=hourly&appid=54e1375c02bb77b1a951b0a2a1264c0d"
    fetch(requestOneCall)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}
oneCall()

const searches = (term) => {
    if (searches && existingSearches.length > 0) {
        var searches = JSON.parse(localStorage.getItem('history'));
        var newSearches = [...oldSearches, term];
        localStorage.setItem('searches', JSON.stringify(newSearches));
    } else {
        searchItems.push(term);
        localStorage.setItem('history', JSON.stringify(newSearches));
    }
};


function weather (searchValue){

    var requesturl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=imperial&appid=54e1375c02bb77b1a951b0a2a1264c0d`;
    fetch(requesturl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        var temp="tempurature:"+data.main.temp
        var wind="windspeed:"+data.wind.speed
        var humid="humidity:"+data.main.humidity
        $("#today").append(temp,wind,humid)
    })
}
weather()



