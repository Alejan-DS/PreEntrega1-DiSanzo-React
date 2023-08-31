import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
// import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  const alertar = () => alert("Usted esta en Logitech G !!!!!");
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

      <Route path="/" element={<ItemListContainer greeting="Bienvenido a Logitch G !" click={alertar}/>}></Route>
      <Route path="/category/:id" element={<ItemListContainer greeting="Bienvenido a Logitch G !" click={alertar}/>}></Route>
      <Route path="/item/:id" element={<ItemListContainer greeting="Bienvenido a Logitch G !" click={alertar}/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
