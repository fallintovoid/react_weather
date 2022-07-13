import React from 'react'
import useRequest from '../hooks/useRequest';

const WeatherService = () => {
    const _apiBase = 'https://api.openweathermap.org/data/2.5/';
    const _apiKey = '6b1cec48bad25180aeb8db7c118b0533'
    const {loading, error, request} = useRequest()

    const currentWeather = async (city = 'Berlin') => {
        const data = await request(`${_apiBase}weather?q=${city}&appid=${_apiKey}`)
        return _transformCurrWeather(data);
    }

    const _transformCurrWeather = (data: any) => {
        const transformed: CurrentWeather = {
            temp: `${Math.floor(data.main.temp - 273)}`,
            icon: data.weather[0].main,
            temp_feels_like: `${Math.floor(data.main.feels_like - 273)}`,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            name: data.name
        }

        return transformed
    }
    return {error, loading, currentWeather}
}

export default WeatherService