import {useEffect, useState} from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';

interface Props {
  currWeather: CurrentWeather
}

export const ThisDay = ({currWeather}: Props) => {

  const [currIcon, setCurrIcon] = useState<string>('sun')
  const date = new Date()
  const currentTime = `${date.getHours()}:${`${date.getMinutes()}`.length === 1 ? '0'+date.getMinutes() : date.getMinutes()}`

  useEffect(() => {
    switch (currWeather.icon) {
      case 'Clouds':
        return(
          setCurrIcon('mainly_cloudy')
        )
      case 'Clear':
        return (
          setCurrIcon('sun')
        )
      default:
        return (
          setCurrIcon('sun')
        )
    }
  }, [currWeather])

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{currWeather?.temp}°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id={currIcon} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{currentTime}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{currWeather?.name}</span>
        </div>
      </div>
    </div>
  );
};
