import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState', // 唯一id
  default: 'light', // 默认值
});