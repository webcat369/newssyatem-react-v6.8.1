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
import { ConfigProvider } from 'antd'

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
  return (
    <ConfigProvider>
      <RouterProvider router={router}/>
    </ConfigProvider>
  );
}
