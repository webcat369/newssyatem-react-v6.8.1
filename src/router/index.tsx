import * as React from 'react';
import App from '../pages/App';
import PriceList from '../pages/Price/List'
import Home from '../pages/Home';
import Price from '../pages/Price';
import Setting from '../pages/Setting';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { ConfigProvider} from 'antd'
import { useAntdTheme } from './../hook/useAntdTheme'
import useTheme from '../hook/useTheme'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='home' element={<Home/>}></Route>
      <Route path='price' element={<Price/>}>
        <Route path='list' element={<PriceList />}></Route>
      </Route>
      <Route path='setting' element={<Setting/>}></Route>
    </Route>
  )
)

export default function Router () {
  const {theme} = useTheme()
  const themeConfig = useAntdTheme(theme)
  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router}/>
    </ConfigProvider>
  );
}
