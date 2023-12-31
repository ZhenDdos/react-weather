import React from 'react';
import { GlobalSVGSelector } from '../../../../assets/icons/shared/GlobalSVGSelector';
import { Day } from './Days';
import s from './Days.module.scss';

interface Props {
    day: Day
}

export const Card = ({ day }: Props) => {
    return (<div className={s.card}>
        <div className={s.day}>{day.day}</div>
        <div className={s.day__info}>{day.day_info}</div>
        <div className={s.img}>
          <GlobalSVGSelector id={day.icon_id}/>  
        </div>
        <div className={s.temp__day}>{day.temp_day}</div>
        <div className={s.temp__night}>{day.temp_night}</div>
        <div className={s.info}>{day.info}</div>
    </div>)
}