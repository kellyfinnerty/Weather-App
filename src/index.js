const key = 'b635a7795bb94332825151305211609'
let CURR_WEATHER = null

function formatURL(location) {
    return `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`
}

async function getWeather(location) {
    try {
        const errorField = document.querySelector('.weather-container')
        let response = await fetch(formatURL(location), { mode: 'cors' })
        let weatherData = await response.json()
        let processedWeather = processWeatherData(weatherData)
        displayWeather(processedWeather)
        CURR_WEATHER = processedWeather
    } catch (error) {
        // find a way to catch server errors?
        console.log(error)
        const errorField = document.querySelector('form small')
        errorField.classList.remove('hidden')
    }
}

function processWeatherData(weather) {
    return {
        location: {
            city: weather.location.name,
            region: weather.location.region,
            country: weather.location.country,
        },
        condition: weather.current.condition.text,
        feelslike: {
            c: Math.round(weather.current.feelslike_c),
            f: Math.round(weather.current.feelslike_f),
        },
        humidity: weather.current.humidity,
        windSpeed: {
            kph: Math.round(weather.current.wind_kph),
            mph: Math.round(weather.current.wind_mph),
        },
        cloudCover: weather.current.cloud,
        uvIndex: weather.current.uv,
        precip: {
            mm: Math.round(weather.current.precip_mm),
            in: Math.round(weather.current.precip_in),
        },
    }
}

function getLocation(location) {
    if (location.country === 'United States of America') {
        return `${location.city}, ${location.region}, USA`
    }
    return `${location.city}, ${location.region}, ${location.country}`
}

function displayWeather(weather) {
    displayWeatherData(weather)
    displayWeatherIcon(weather)
    resetForm()
    clearErrors()
}

function displayWeatherData(weather) {
    const container = document.querySelector('.weather-container')
    const location = container.querySelector('.location')
    const condition = container.querySelector('.curr-conditions')
    const feelsLike = container.querySelector('.feels-like')
    const humidity = container.querySelector('.humidity')
    const cloudCover = container.querySelector('.cloud-cover')
    const windSpeed = container.querySelector('.wind-speed')
    const precip = container.querySelector('.precipitation')
    const uv = container.querySelector('.uv')

    location.textContent = getLocation(weather.location)
    condition.textContent = weather.condition
    humidity.textContent = `Humidity: ${weather.humidity}%`
    cloudCover.textContent = `Cloud Cover: ${weather.cloudCover}%`
    uv.textContent = `UV Index: ${weather.uvIndex}`

    const toggle = document.querySelector('.toggle-btn')

    if (toggle.classList.contains('celsius')) {
        windSpeed.textContent = `Wind Speed: ${weather.windSpeed.kph} kph`
        precip.textContent = `Precipitation: ${weather.precip.mm} mm`
        feelsLike.textContent = `${weather.feelslike.c}˚C`
    } else {
        windSpeed.textContent = `Wind Speed: ${weather.windSpeed.mph} mph`
        precip.textContent = `Precipitation: ${weather.precip.in} in`
        feelsLike.textContent = `${weather.feelslike.f}˚F`
    }
}

function displayWeatherIcon(weather) {
    //clear weather icon
    const icons = Array.from(document.querySelectorAll('.weather-icon'))
    icons.forEach((icon) => icon.classList.add('hidden'))

    const condition = weather.condition.toLowerCase()

    if (condition.includes('sunny') || condition.includes('clear')) {
        document.querySelector('.fa-sun').classList.remove('hidden')
    } else if (condition.includes('snow') || condition.includes('blizzard')) {
        document.querySelector('.fa-snowflake').classList.remove('hidden')
    } else if (condition.includes('partly cloudy')) {
        document.querySelector('.fa-cloud-sun').classList.remove('hidden')
    } else if (
        condition.includes('fog') ||
        condition.includes('mist') ||
        condition.includes('overcast') ||
        condition.includes('cloudy')
    ) {
        document.querySelector('.fa-cloud').classList.remove('hidden')
    } else if (
        condition.includes('torrential') ||
        condition.includes('heavy') ||
        condition.includes('sleet') ||
        condition.includes('ice') ||
        condition.includes('sleet')
    ) {
        document
            .querySelector('.fa-cloud-showers-heavy')
            .classList.remove('hidden')
    } else if (condition.includes('rain')) {
        document.querySelector('.fa-cloud-rain').classList.remove('hidden')
    } else {
        document.querySelector('.fa-cloud').classList.remove('hidden')
    }
}

function resetForm() {
    document.querySelector('.location-search').reset()
}

function clearErrors() {
    document.querySelector('form small').classList.add('hidden')
}

function searchLocation(event) {
    const locationInput = document.querySelector('.location-search input')
    const searchButton = document.querySelector('.location-search button')

    const searchTerm = locationInput.value.trim()
    getWeather(searchTerm)
}

function initSearchForm() {
    const search = document.querySelector('.location-search button')
    const units = document.querySelector('.toggle-btn')

    search.addEventListener('click', (e) => {
        e.preventDefault()
        searchLocation(e)
    })

    units.addEventListener('click', (e) => {
        units.classList.toggle('celsius')
        units.parentElement.classList.toggle('celsius')
        displayWeatherData(CURR_WEATHER)
    })
}

initSearchForm()
getWeather('Boston')
