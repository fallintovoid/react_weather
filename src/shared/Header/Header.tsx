import { useEffect, useRef } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import useTheme from '../../hooks/useTheme';
import s from './Header.module.scss';

interface Props {
  getSelectValue: Function
}

export const Header = ({getSelectValue}: Props) => {
  const {changeTheme} = useTheme();
  const {theme} = useTheme()
 

  const options = [
    { value: 'city-1', label: 'Berlin' },
    { value: 'city-2', label: 'Moscow' },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 
        theme === 'light' ? 'rgba(71, 147, 255, 0.2)' : '#4F4F4F',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#fff' : '#000',
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={() => changeTheme()}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          options={options}
          styles={colourStyles}
          onChange={(e) => getSelectValue(e?.label)
          }
        />
      </div>
    </header>
  );
};
