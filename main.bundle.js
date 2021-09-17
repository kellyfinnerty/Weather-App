/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZELElBQUksS0FBSyxTQUFTO0FBQy9FOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxjQUFjO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYyxJQUFJLGdCQUFnQjtBQUNwRDtBQUNBLGNBQWMsY0FBYyxJQUFJLGdCQUFnQixJQUFJLGlCQUFpQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxpQkFBaUI7QUFDekQsNkNBQTZDLG1CQUFtQjtBQUNoRSxrQ0FBa0MsZ0JBQWdCOztBQUVsRDs7QUFFQTtBQUNBLCtDQUErQyx1QkFBdUI7QUFDdEUsK0NBQStDLG1CQUFtQjtBQUNsRSxtQ0FBbUMsb0JBQW9CO0FBQ3ZELE1BQU07QUFDTiwrQ0FBK0MsdUJBQXVCO0FBQ3RFLCtDQUErQyxtQkFBbUI7QUFDbEUsbUNBQW1DLG9CQUFvQjtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSAnYjYzNWE3Nzk1YmI5NDMzMjgyNTE1MTMwNTIxMTYwOSdcbmxldCBDVVJSX1dFQVRIRVIgPSBudWxsXG5cbmZ1bmN0aW9uIGZvcm1hdFVSTChsb2NhdGlvbikge1xuICAgIHJldHVybiBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2tleX0mcT0ke2xvY2F0aW9ufWBcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGVycm9yRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb250YWluZXInKVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmb3JtYXRVUkwobG9jYXRpb24pLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgICAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgbGV0IHByb2Nlc3NlZFdlYXRoZXIgPSBwcm9jZXNzV2VhdGhlckRhdGEod2VhdGhlckRhdGEpXG4gICAgICAgIGRpc3BsYXlXZWF0aGVyKHByb2Nlc3NlZFdlYXRoZXIpXG4gICAgICAgIENVUlJfV0VBVEhFUiA9IHByb2Nlc3NlZFdlYXRoZXJcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBmaW5kIGEgd2F5IHRvIGNhdGNoIHNlcnZlciBlcnJvcnM/XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICBjb25zdCBlcnJvckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBzbWFsbCcpXG4gICAgICAgIGVycm9yRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGNpdHk6IHdlYXRoZXIubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICAgIHJlZ2lvbjogd2VhdGhlci5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgICAgICBjb3VudHJ5OiB3ZWF0aGVyLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmRpdGlvbjogd2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICBmZWVsc2xpa2U6IHtcbiAgICAgICAgICAgIGM6IE1hdGgucm91bmQod2VhdGhlci5jdXJyZW50LmZlZWxzbGlrZV9jKSxcbiAgICAgICAgICAgIGY6IE1hdGgucm91bmQod2VhdGhlci5jdXJyZW50LmZlZWxzbGlrZV9mKSxcbiAgICAgICAgfSxcbiAgICAgICAgaHVtaWRpdHk6IHdlYXRoZXIuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgd2luZFNwZWVkOiB7XG4gICAgICAgICAgICBrcGg6IE1hdGgucm91bmQod2VhdGhlci5jdXJyZW50LndpbmRfa3BoKSxcbiAgICAgICAgICAgIG1waDogTWF0aC5yb3VuZCh3ZWF0aGVyLmN1cnJlbnQud2luZF9tcGgpLFxuICAgICAgICB9LFxuICAgICAgICBjbG91ZENvdmVyOiB3ZWF0aGVyLmN1cnJlbnQuY2xvdWQsXG4gICAgICAgIHV2SW5kZXg6IHdlYXRoZXIuY3VycmVudC51dixcbiAgICAgICAgcHJlY2lwOiB7XG4gICAgICAgICAgICBtbTogTWF0aC5yb3VuZCh3ZWF0aGVyLmN1cnJlbnQucHJlY2lwX21tKSxcbiAgICAgICAgICAgIGluOiBNYXRoLnJvdW5kKHdlYXRoZXIuY3VycmVudC5wcmVjaXBfaW4pLFxuICAgICAgICB9LFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24uY291bnRyeSA9PT0gJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScpIHtcbiAgICAgICAgcmV0dXJuIGAke2xvY2F0aW9uLmNpdHl9LCAke2xvY2F0aW9uLnJlZ2lvbn0sIFVTQWBcbiAgICB9XG4gICAgcmV0dXJuIGAke2xvY2F0aW9uLmNpdHl9LCAke2xvY2F0aW9uLnJlZ2lvbn0sICR7bG9jYXRpb24uY291bnRyeX1gXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXIpIHtcbiAgICBkaXNwbGF5V2VhdGhlckRhdGEod2VhdGhlcilcbiAgICBkaXNwbGF5V2VhdGhlckljb24od2VhdGhlcilcbiAgICByZXNldEZvcm0oKVxuICAgIGNsZWFyRXJyb3JzKClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEYXRhKHdlYXRoZXIpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb250YWluZXInKVxuICAgIGNvbnN0IGxvY2F0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpXG4gICAgY29uc3QgY29uZGl0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyLWNvbmRpdGlvbnMnKVxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpXG4gICAgY29uc3QgaHVtaWRpdHkgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5JylcbiAgICBjb25zdCBjbG91ZENvdmVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbG91ZC1jb3ZlcicpXG4gICAgY29uc3Qgd2luZFNwZWVkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkJylcbiAgICBjb25zdCBwcmVjaXAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnByZWNpcGl0YXRpb24nKVxuICAgIGNvbnN0IHV2ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy51dicpXG5cbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGdldExvY2F0aW9uKHdlYXRoZXIubG9jYXRpb24pXG4gICAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlci5jb25kaXRpb25cbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyLmh1bWlkaXR5fSVgXG4gICAgY2xvdWRDb3Zlci50ZXh0Q29udGVudCA9IGBDbG91ZCBDb3ZlcjogJHt3ZWF0aGVyLmNsb3VkQ292ZXJ9JWBcbiAgICB1di50ZXh0Q29udGVudCA9IGBVViBJbmRleDogJHt3ZWF0aGVyLnV2SW5kZXh9YFxuXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1idG4nKVxuXG4gICAgaWYgKHRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbHNpdXMnKSkge1xuICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyLndpbmRTcGVlZC5rcGh9IGtwaGBcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYFByZWNpcGl0YXRpb246ICR7d2VhdGhlci5wcmVjaXAubW19IG1tYFxuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmZlZWxzbGlrZS5jfcuaQ2BcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyLndpbmRTcGVlZC5tcGh9IG1waGBcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYFByZWNpcGl0YXRpb246ICR7d2VhdGhlci5wcmVjaXAuaW59IGluYFxuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmZlZWxzbGlrZS5mfcuaRmBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVySWNvbih3ZWF0aGVyKSB7XG4gICAgLy9jbGVhciB3ZWF0aGVyIGljb25cbiAgICBjb25zdCBpY29ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXItaWNvbicpKVxuICAgIGljb25zLmZvckVhY2goKGljb24pID0+IGljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpXG5cbiAgICBjb25zdCBjb25kaXRpb24gPSB3ZWF0aGVyLmNvbmRpdGlvbi50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCdzdW5ueScpIHx8IGNvbmRpdGlvbi5pbmNsdWRlcygnY2xlYXInKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc3VuJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcygnc25vdycpIHx8IGNvbmRpdGlvbi5pbmNsdWRlcygnYmxpenphcmQnKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc25vd2ZsYWtlJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcygncGFydGx5IGNsb3VkeScpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1jbG91ZC1zdW4nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNvbmRpdGlvbi5pbmNsdWRlcygnZm9nJykgfHxcbiAgICAgICAgY29uZGl0aW9uLmluY2x1ZGVzKCdtaXN0JykgfHxcbiAgICAgICAgY29uZGl0aW9uLmluY2x1ZGVzKCdvdmVyY2FzdCcpIHx8XG4gICAgICAgIGNvbmRpdGlvbi5pbmNsdWRlcygnY2xvdWR5JylcbiAgICApIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWNsb3VkJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjb25kaXRpb24uaW5jbHVkZXMoJ3RvcnJlbnRpYWwnKSB8fFxuICAgICAgICBjb25kaXRpb24uaW5jbHVkZXMoJ2hlYXZ5JykgfHxcbiAgICAgICAgY29uZGl0aW9uLmluY2x1ZGVzKCdzbGVldCcpIHx8XG4gICAgICAgIGNvbmRpdGlvbi5pbmNsdWRlcygnaWNlJykgfHxcbiAgICAgICAgY29uZGl0aW9uLmluY2x1ZGVzKCdzbGVldCcpXG4gICAgKSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmZhLWNsb3VkLXNob3dlcnMtaGVhdnknKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ3JhaW4nKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtY2xvdWQtcmFpbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWNsb3VkJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24tc2VhcmNoJykucmVzZXQoKVxufVxuXG5mdW5jdGlvbiBjbGVhckVycm9ycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIHNtYWxsJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn1cblxuZnVuY3Rpb24gc2VhcmNoTG9jYXRpb24oZXZlbnQpIHtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLXNlYXJjaCBpbnB1dCcpXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLXNlYXJjaCBidXR0b24nKVxuXG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IGxvY2F0aW9uSW5wdXQudmFsdWUudHJpbSgpXG4gICAgZ2V0V2VhdGhlcihzZWFyY2hUZXJtKVxufVxuXG5mdW5jdGlvbiBpbml0U2VhcmNoRm9ybSgpIHtcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24tc2VhcmNoIGJ1dHRvbicpXG4gICAgY29uc3QgdW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWJ0bicpXG5cbiAgICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2VhcmNoTG9jYXRpb24oZSlcbiAgICB9KVxuXG4gICAgdW5pdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB1bml0cy5jbGFzc0xpc3QudG9nZ2xlKCdjZWxzaXVzJylcbiAgICAgICAgdW5pdHMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxzaXVzJylcbiAgICAgICAgZGlzcGxheVdlYXRoZXJEYXRhKENVUlJfV0VBVEhFUilcbiAgICB9KVxufVxuXG5pbml0U2VhcmNoRm9ybSgpXG5nZXRXZWF0aGVyKCdCb3N0b24nKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9