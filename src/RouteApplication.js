import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import UserApplication from './reduxApplication/slice/UserApplication';
import ResourceApplication from './reduxResource/ResourceSlice/ResourceApplication';

function RouteApplication() {
  return (
    <div>
      <Routes>
        <Route path="/CostAnlysis" element={<div>CostAnlysis</div>}></Route>
        <Route path="/Resources" element={<ResourceApplication/>}></Route>
        <Route path="/Application" element={<UserApplication/>}></Route>
      </Routes>
    </div>
  )
}

export default RouteApplication;