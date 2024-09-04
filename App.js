import React from "react";
import "./App.css";
import Boy from "./component/Boy";
import Girl from "./component/Girl";
import Main from "./component/Main";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
export default function App() {
  return (<div>


    <BrowserRouter>

      <Routes>

        <Route path="" element={<Main />}></Route>
        <Route path="/Girl" element={<Girl />}></Route>
        <Route path="/Boy" element={<Boy />}></Route>


      </Routes>

    </BrowserRouter>




  </div>


  )
};