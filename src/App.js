import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import Button from 'react-bootstrap/Button';
import { MyProducts } from "./components/MyProducts";
import React, { useState } from 'react';

function App() {

  const [productosVisibles, setProductosVisibles] = useState(false);

  const alternarProductos = () => {
    setProductosVisibles(!productosVisibles);
  };

  const alertar = () => alert("Usted esta en Logitech G !!!!!");
  return (
    <>
      <NavBar />

      <div className="msj">
        <ItemListContainer greeting="Bienvenido a Logitch G !" click={alertar} />
      </div>

      <div>
        <h1>Aplicación de Productos</h1>
        <Button variant="primary" onClick={alternarProductos}>
          {productosVisibles ? 'Ocultar Todos' : 'Mostrar Todos'}
        </Button>
        {productosVisibles && (
          <div>
            <MyProducts />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
