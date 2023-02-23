import {useRecoilState} from 'recoil';
import {themeState} from '../store/atom'

export default function useTheme () {
  const [theme,setTheme] = useRecoilState(themeState)

  const changeTheme = (_theme:string) => {
    setTheme(_theme)
  }

  return { theme, changeTheme }
}