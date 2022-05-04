window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=168f93f7b1f26b1f209f3c816645efa5

            `;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{

                const temp = data.main.temp;
                const {icon, description} = data.weather[0];
                //Set DOM Elements from the API
                temperatureDegree.textContent = Math.round(temp - 273.15);
                temperatureDescription.textContent = description;
                locationTimezone.textContent = data.name;
                document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
            })
        });

        
    }
});