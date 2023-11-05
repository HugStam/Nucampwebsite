/* console.log('javascript connected!');
    
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

// when the pause button is clicked, pause the carousel
const carouselPause = document.getElementById('carouselPause');
carouselPause.addEventListener('click', function() {
    console.log('pausing the carousel');
    carousel.pause();
})

// when the play button is clicked, begin cycling through the images
const carouselPlay = document.getElementById('carouselPlay');
carouselPlay.addEventListener('click', function() {
    console.log('cycle the carousel');
    carousel.cycle();
}) */
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
}) 

async function fetchWeather() {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = 'Stamford';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

    try {
        const response = await fetch(url)
        console.log('from url from end point', response)
        const data = await response.json()
        console.log(data.weather[0].description)
        console.log(data)
        displayWeather(data)
    }catch(error) {
       // console.log(error)
    }
}

function displayWeather(data) {
    const temperature = data.main.temp
    const weatherDescription = data.weather[0].description
    const weatherIcon = data.weather[0].icon 
    const imgElement = document.createElement('img');
    imgElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`
    imgElement.alt = 'weather icon';
    const iconElement = document.getElementById('weather-icon');
    iconElement.appendChild(imgElement);
    const tempLink = document.getElementById('weather-temp');
    tempLink.textContent = `${temperature} \u00B0f`;
    const tempDesc = document.getElementById('weather-description');
    tempDesc.textContent = weatherDescription;  
}
fetchWeather();