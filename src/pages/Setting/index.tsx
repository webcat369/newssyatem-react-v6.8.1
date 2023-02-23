import * as React from 'react';
import { Button } from 'antd';
import useTheme from '../../hook/useTheme';
export interface Props {
}

export default function Setting (props: Props) {
  const {changeTheme} = useTheme()
  return (
    <div style={{display:'flex'}}>
      <Button type="primary" onClick={() => {changeTheme('light')}}>亮色</Button>
      <Button onClick={() => {changeTheme('drak')}}>暗色</Button>
    </div>
  );
}
