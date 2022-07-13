import { useContext, useEffect } from 'react'
import { ThemeContext } from '../provider/ThemeProvider'

const useTheme = () => {
  const {theme, setTheme} = useContext<IContext>(ThemeContext);
  const root = document.querySelector(':root') as HTMLElement;

    const components = [
      'body-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color'
    ]

  useEffect(() => {
    components.forEach(item => {
      root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`)
    })
  }, [theme])

  const changeTheme = async () => {
    await setTheme((prev: string) => prev === 'light' ? 'dark' : 'light')
  }

  return {theme, changeTheme};
}

export default useTheme