import React, { createRef, useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import Select from 'react-select';
import { GlobalSVGSelector } from '../../assets/icons/shared/GlobalSVGSelector';
import { Theme } from '../../context/ThemeContext';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { useTheme } from '../../hooks/useTheme';
import s from './Header.module.scss';
import {onChangeSelect} from '../../store/slices/SelectSlice'
interface Props {

}

export const Header = (props: Props) => {
    const theme = useTheme();
    const dispatch = useCustomDispatch();
    const sel = useCustomSelector(state => state.selectReducer) 
    const options = [
        { value: 'Paris', label: 'Париж' },
        { value: 'Moscow', label: 'Москва' },
        { value: 'Samara', label: 'Самара' }
      ]


      const colourStyles = {
        control: (styles: any) => ({
            ...styles, 
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            heigth: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles, 
            color: theme.theme === Theme.DARK ? '#fff' : '#000'
        })
      }


      function changeTheme() {
        theme.changeTheme(theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
      }
      function myNewFunction(sel: any) {
        alert(sel.options[sel.selectedIndex].text);
      }
      return (<header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSVGSelector id='header-logo'/>
            </div>
            <div className={s.title}>React Weather</div>
        </div>

        <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}>
            <GlobalSVGSelector id='change_theme'/>
            </div>
            <Select defaultValue={sel} styles = {colourStyles} options={options} onChange={(e) => dispatch(onChangeSelect({value: e?.value, label: e?.label}))}/>
        </div>
    </header>)
}