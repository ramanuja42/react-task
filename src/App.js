import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/login'
import DashBoard from './components/dashboard'
export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route  path="/dashboard" component={DashBoard} />
    </BrowserRouter>
  )
}
