











// async function weatherUpdate(city) {

//     let response = await
//         let data = await response.json()
//     console.log(data)
//     temp.innerHTML = Math.round(data.main.temp) + "°C";
//     cityName.innerHTML = data.name;
//     humidity.innerHTML = data.main.humidity + "%";
//     wind.innerHTML = data.wind.speed + "km/hr";

// }
// 

let image = document.querySelector(".weather-condition img");
let temp = document.querySelector(".temp");
let cityName = document.querySelector(".city-name");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weatherBtn = document.getElementById("btn");


weatherBtn.addEventListener("click", () => {
    let userName = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let apiKey = "f08a19c2f33919202e2596b842539288";
    return new Promise((resolve, reject) => {
        if (userName && city) {
            resolve(
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${apiKey}`)
                    .then(response => {
                        response.json()
                            .then(data => {

                                temp.innerHTML = Math.round(data.main.temp) + "°C";
                                cityName.innerHTML = data.name;
                                humidity.innerHTML = data.main.humidity + "%";
                                wind.innerHTML = data.wind.speed + "km/hr";
                                switch (data.weather[0].main) {
                                    case 'clear':
                                        image.src = "weather-app-img/images/clear.png";
                                        break;
                                    case 'rain':
                                        image.src = "weather-app-img/images/rain.png";
                                        break;
                                    case 'clouds':
                                        image.src = "weather-app-img/images/clouds.png";
                                        break;
                                    case 'snow':
                                        image.src = "weather-app-img/images/snow.png";
                                        break;
                                    case 'mist':
                                        image.src = "weather-app-img/images/mist.png";
                                        break;
                                    case 'drizzle':
                                        image.src = "weather-app-img/images/drizzle.png";
                                        break;

                                    default:
                                        image.src = "weather-app-img/images/clouds.png"
                                            ;
                                }
                            })
                    }))
                    reject()
        }

    })



}

)

