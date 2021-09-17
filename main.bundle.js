/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const key = 'b635a7795bb94332825151305211609'
let CURR_WEATHER = null

function formatURL(location) {
    return `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`
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
        document.querySelector('.fa-cloud').classList.remove('hidden')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0EsNERBQTRELElBQUksS0FBSyxTQUFTO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxjQUFjO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYyxJQUFJLGdCQUFnQjtBQUNwRDtBQUNBLGNBQWMsY0FBYyxJQUFJLGdCQUFnQixJQUFJLGlCQUFpQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxpQkFBaUI7QUFDekQsNkNBQTZDLG1CQUFtQjtBQUNoRSxrQ0FBa0MsZ0JBQWdCOztBQUVsRDs7QUFFQTtBQUNBLCtDQUErQyx1QkFBdUI7QUFDdEUsK0NBQStDLG1CQUFtQjtBQUNsRSxtQ0FBbUMsb0JBQW9CO0FBQ3ZELE1BQU07QUFDTiwrQ0FBK0MsdUJBQXVCO0FBQ3RFLCtDQUErQyxtQkFBbUI7QUFDbEUsbUNBQW1DLG9CQUFvQjtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtleSA9ICdiNjM1YTc3OTViYjk0MzMyODI1MTUxMzA1MjExNjA5J1xubGV0IENVUlJfV0VBVEhFUiA9IG51bGxcblxuZnVuY3Rpb24gZm9ybWF0VVJMKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtrZXl9JnE9JHtsb2NhdGlvbn1gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBlcnJvckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY29udGFpbmVyJylcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZm9ybWF0VVJMKGxvY2F0aW9uKSwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAgICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIGxldCBwcm9jZXNzZWRXZWF0aGVyID0gcHJvY2Vzc1dlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKVxuICAgICAgICBkaXNwbGF5V2VhdGhlcihwcm9jZXNzZWRXZWF0aGVyKVxuICAgICAgICBDVVJSX1dFQVRIRVIgPSBwcm9jZXNzZWRXZWF0aGVyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gZmluZCBhIHdheSB0byBjYXRjaCBzZXJ2ZXIgZXJyb3JzP1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgY29uc3QgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gc21hbGwnKVxuICAgICAgICBlcnJvckZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEod2VhdGhlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBjaXR5OiB3ZWF0aGVyLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICByZWdpb246IHdlYXRoZXIubG9jYXRpb24ucmVnaW9uLFxuICAgICAgICAgICAgY291bnRyeTogd2VhdGhlci5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICB9LFxuICAgICAgICBjb25kaXRpb246IHdlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgZmVlbHNsaWtlOiB7XG4gICAgICAgICAgICBjOiBNYXRoLnJvdW5kKHdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfYyksXG4gICAgICAgICAgICBmOiBNYXRoLnJvdW5kKHdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfZiksXG4gICAgICAgIH0sXG4gICAgICAgIGh1bWlkaXR5OiB3ZWF0aGVyLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgIHdpbmRTcGVlZDoge1xuICAgICAgICAgICAga3BoOiBNYXRoLnJvdW5kKHdlYXRoZXIuY3VycmVudC53aW5kX2twaCksXG4gICAgICAgICAgICBtcGg6IE1hdGgucm91bmQod2VhdGhlci5jdXJyZW50LndpbmRfbXBoKSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xvdWRDb3Zlcjogd2VhdGhlci5jdXJyZW50LmNsb3VkLFxuICAgICAgICB1dkluZGV4OiB3ZWF0aGVyLmN1cnJlbnQudXYsXG4gICAgICAgIHByZWNpcDoge1xuICAgICAgICAgICAgbW06IE1hdGgucm91bmQod2VhdGhlci5jdXJyZW50LnByZWNpcF9tbSksXG4gICAgICAgICAgICBpbjogTWF0aC5yb3VuZCh3ZWF0aGVyLmN1cnJlbnQucHJlY2lwX2luKSxcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uLmNvdW50cnkgPT09ICdVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EnKSB7XG4gICAgICAgIHJldHVybiBgJHtsb2NhdGlvbi5jaXR5fSwgJHtsb2NhdGlvbi5yZWdpb259LCBVU0FgXG4gICAgfVxuICAgIHJldHVybiBgJHtsb2NhdGlvbi5jaXR5fSwgJHtsb2NhdGlvbi5yZWdpb259LCAke2xvY2F0aW9uLmNvdW50cnl9YFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyKSB7XG4gICAgZGlzcGxheVdlYXRoZXJEYXRhKHdlYXRoZXIpXG4gICAgZGlzcGxheVdlYXRoZXJJY29uKHdlYXRoZXIpXG4gICAgcmVzZXRGb3JtKClcbiAgICBjbGVhckVycm9ycygpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyRGF0YSh3ZWF0aGVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY29udGFpbmVyJylcbiAgICBjb25zdCBsb2NhdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKVxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY3Vyci1jb25kaXRpb25zJylcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKVxuICAgIGNvbnN0IGh1bWlkaXR5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpXG4gICAgY29uc3QgY2xvdWRDb3ZlciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2xvdWQtY292ZXInKVxuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZCcpXG4gICAgY29uc3QgcHJlY2lwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcmVjaXBpdGF0aW9uJylcbiAgICBjb25zdCB1diA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudXYnKVxuXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBnZXRMb2NhdGlvbih3ZWF0aGVyLmxvY2F0aW9uKVxuICAgIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXIuY29uZGl0aW9uXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlci5odW1pZGl0eX0lYFxuICAgIGNsb3VkQ292ZXIudGV4dENvbnRlbnQgPSBgQ2xvdWQgQ292ZXI6ICR7d2VhdGhlci5jbG91ZENvdmVyfSVgXG4gICAgdXYudGV4dENvbnRlbnQgPSBgVVYgSW5kZXg6ICR7d2VhdGhlci51dkluZGV4fWBcblxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtYnRuJylcblxuICAgIGlmICh0b2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxzaXVzJykpIHtcbiAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlci53aW5kU3BlZWQua3BofSBrcGhgXG4gICAgICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGBQcmVjaXBpdGF0aW9uOiAke3dlYXRoZXIucHJlY2lwLm1tfSBtbWBcbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5mZWVsc2xpa2UuY33LmkNgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlci53aW5kU3BlZWQubXBofSBtcGhgXG4gICAgICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGBQcmVjaXBpdGF0aW9uOiAke3dlYXRoZXIucHJlY2lwLmlufSBpbmBcbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5mZWVsc2xpa2UuZn3LmkZgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckljb24od2VhdGhlcikge1xuICAgIC8vY2xlYXIgd2VhdGhlciBpY29uXG4gICAgY29uc3QgaWNvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVyLWljb24nKSlcbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiBpY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKVxuXG4gICAgY29uc3QgY29uZGl0aW9uID0gd2VhdGhlci5jb25kaXRpb24udG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcygnc3VubnknKSB8fCBjb25kaXRpb24uaW5jbHVkZXMoJ2NsZWFyJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXN1bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ3Nub3cnKSB8fCBjb25kaXRpb24uaW5jbHVkZXMoJ2JsaXp6YXJkJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXNub3dmbGFrZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ3BhcnRseSBjbG91ZHknKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtY2xvdWQtc3VuJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjb25kaXRpb24uaW5jbHVkZXMoJ2ZvZycpIHx8XG4gICAgICAgIGNvbmRpdGlvbi5pbmNsdWRlcygnbWlzdCcpIHx8XG4gICAgICAgIGNvbmRpdGlvbi5pbmNsdWRlcygnb3ZlcmNhc3QnKSB8fFxuICAgICAgICBjb25kaXRpb24uaW5jbHVkZXMoJ2Nsb3VkeScpXG4gICAgKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1jbG91ZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgY29uZGl0aW9uLmluY2x1ZGVzKCd0b3JyZW50aWFsJykgfHxcbiAgICAgICAgY29uZGl0aW9uLmluY2x1ZGVzKCdoZWF2eScpIHx8XG4gICAgICAgIGNvbmRpdGlvbi5pbmNsdWRlcygnc2xlZXQnKSB8fFxuICAgICAgICBjb25kaXRpb24uaW5jbHVkZXMoJ2ljZScpIHx8XG4gICAgICAgIGNvbmRpdGlvbi5pbmNsdWRlcygnc2xlZXQnKVxuICAgICkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtY2xvdWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1jbG91ZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLXNlYXJjaCcpLnJlc2V0KClcbn1cblxuZnVuY3Rpb24gY2xlYXJFcnJvcnMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBzbWFsbCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59XG5cbmZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1zZWFyY2ggaW5wdXQnKVxuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1zZWFyY2ggYnV0dG9uJylcblxuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBsb2NhdGlvbklucHV0LnZhbHVlLnRyaW0oKVxuICAgIGdldFdlYXRoZXIoc2VhcmNoVGVybSlcbn1cblxuZnVuY3Rpb24gaW5pdFNlYXJjaEZvcm0oKSB7XG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLXNlYXJjaCBidXR0b24nKVxuICAgIGNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1idG4nKVxuXG4gICAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNlYXJjaExvY2F0aW9uKGUpXG4gICAgfSlcblxuICAgIHVuaXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdW5pdHMuY2xhc3NMaXN0LnRvZ2dsZSgnY2Vsc2l1cycpXG4gICAgICAgIHVuaXRzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2Vsc2l1cycpXG4gICAgICAgIGRpc3BsYXlXZWF0aGVyRGF0YShDVVJSX1dFQVRIRVIpXG4gICAgfSlcbn1cblxuaW5pdFNlYXJjaEZvcm0oKVxuZ2V0V2VhdGhlcignQm9zdG9uJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==