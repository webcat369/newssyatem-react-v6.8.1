import {useRecoilState} from 'recoil';
import {themeState} from '../store/atom'
import { THEME } from '../utils/theme';

export type Theme = 'dark' | 'light'

export default function useTheme () {
  const [theme,setTheme] = useRecoilState(themeState)

  const changeTheme = (_theme:Theme) => {
    setTheme(_theme)
    localStorage.setItem('theme',_theme)
    const currentTheme = THEME[_theme]
    const themeStyle = Object.keys(currentTheme).map((item:string) => `${item}:${currentTheme[item]}`).join(';') //string类型
    document.body.setAttribute('style',themeStyle)
  }

  return { theme, changeTheme }
}