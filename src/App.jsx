import React from "react";
import "./Sass/style.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./Components/Main/Main"





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
