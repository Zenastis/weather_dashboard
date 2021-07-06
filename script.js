



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
            forecast2.innerHTML = <h4 class="mt"
        })
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

