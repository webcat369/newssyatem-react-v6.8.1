import * as React from 'react';
import {  Outlet } from 'react-router-dom'
export interface Props {
}

export default function Price (props: Props) {
  //Price页面框架
  return (
    <div>
      <Outlet/>
    </div>
  );
}
