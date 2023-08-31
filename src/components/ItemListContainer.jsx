import { useState, useEffect } from 'react';  // uno es para cambiar la variable de estado y el otro para ejecutar la promesa
import data from "../data/productos.json"
import Container from "react-bootstrap/Container";
import { ItemList } from './ItemList';


export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise.then((data) => setProducts(data));
  }, [])  // para que se renderise el componente el segundo argunmento es un array vacio



  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <div style={{display: "flex", flexWrap: "wrap" }}>
        <ItemList products={products}/>
      </div>
    </Container>
  );
};
