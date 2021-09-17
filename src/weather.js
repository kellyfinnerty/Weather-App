export default class Weather {
    constructor(
        city,
        condition,
        conditionDesc,
        feelsLike,
        humidity,
        minTemp,
        maxTemp,
        windSpeed,
        cloudiness
    ) {
        this.city = city
        this.condition = condition
        this.conditionDesc = conditionDesc
        this.feelsLike = feelsLike
        this.humidity = humidity
        this.minTemp = minTemp
        this.maxTemp = maxTemp
        this.windSpeed = windSpeed
        this.cloudiness = cloudiness
    }

    getCity() {
        return this.city
    }

    getCondition() {
        return this.condition
    }

    getConditionDesc() {
        return this.conditionDesc
    }

    getFeelsLike() {
        return this.feelsLike
    }

    getHumidity() {
        return this.humidity
    }

    getMinTemp() {
        return this.minTemp
    }

    getMaxTemp() {
        return this.maxTemp
    }

    getWindSpeed() {
        return this.windSpeed
    }

    getCloudiness() {
        return this.cloudiness
    }
}
