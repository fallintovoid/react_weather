import { useEffect, useState } from 'react';
import WeatherService from '../../service/WeatherService';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss';

interface Props {
  currCity: string
}

export const Home = ({currCity}: Props) => {

  const {currentWeather} = WeatherService()
  const [currWeather, setCurrWeather] = useState<CurrentWeather>({
    temp: '20',
    icon: 'Cloudy',
    temp_feels_like: `20`,
    pressure: `100`,
    wind: `36`,
    name: `Undefinded`
  })
  

  useEffect(() => {
    console.log(currCity)
    currentWeather(currCity)
      .then(upadateWeather)
  }, [currCity])

  const upadateWeather = (data: CurrentWeather) => {
    setCurrWeather(data)
  }

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay currWeather={currWeather}/>
        <ThisDayInfo currWeather={currWeather}/>
      </div>
      <Days />
    </div>
  );
};
