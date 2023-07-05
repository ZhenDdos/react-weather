import React from 'react';
import { GlobalSVGSelector } from '../../../../assets/icons/shared/GlobalSVGSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
    weather: Weather
}

export const ThisDay = ({weather}: Props) => {
    console.log(weather.weather[0].main);
    return (<div className={s.this__day}>
        <div className={s.top__block}>
            <div className={s.top__wrapper}>
                <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
                <div className={s.this__day_name}>Сегодня</div>
            </div>
            <GlobalSVGSelector id={weather.weather[0].main}/>
        </div>
        <div className={s.bottom__block}>
            <div className={s.this__time}>
                Время: <span>{new Date().getHours()}:{new Date().getMinutes() > 9 ? new Date().getMinutes(): `0${new Date().getMinutes()}`}</span>
            </div>
            <div className={s.this__city}>
                <span>{weather.name}</span>
            </div>
        </div>
    </div>)
}