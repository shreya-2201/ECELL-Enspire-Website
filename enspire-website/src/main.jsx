import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout'
import Home from './components/home'
import Events from './components/events'
import Sponsers from './components/sponsers'
import Teams from './components/teams'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='events' element={<Events/>}/>
      <Route path='sponsers' element={<Sponsers/>}/>
      <Route path='teams' element={<Teams/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
