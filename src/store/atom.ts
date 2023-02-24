import { atom } from 'recoil';
export type Theme = 'dark' | 'light'

export const themeState = atom<Theme>({
  key: 'themeState', // 唯一id
  default: 'light', // 默认值
});