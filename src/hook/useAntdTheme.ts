import { ThemeConfig, theme } from 'antd'

export const useAntdTheme = (val:string):ThemeConfig => {
  // console.log('val:','light');
  let themeConfig:ThemeConfig = {}
  if(val === 'light'){
    themeConfig = {
      algorithm: theme.defaultAlgorithm,
      token: {colorPrimary: '#0256FF'}
    }
  }else if(val === 'drak'){
    themeConfig = {
      algorithm: theme.darkAlgorithm,
      token: {colorPrimary: '#0256FF'}
    }
  }
  return themeConfig
}