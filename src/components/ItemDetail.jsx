import { useState, useEffect } from 'react';  // uno es para cambiar la variable de estado y el otro para ejecutar la promesa
import data from "../data/productos.json"
import Container from "react-bootstrap/Container";
// import { ItemList } from './ItemList';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const ItemDetail = (props) => {
  const [descripVisibles, setDescripVisibles] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise.then((data) => setProduct(data));
  }, [])  // para que se renderise el componente el segundo argunmento es un array vacio

  if(!product) return <div>Loading.......</div>





const alternarDescrip = () => {
  setDescripVisibles(!descripVisibles);
};
<div>
        <Button variant="primary" onClick={alternarDescrip}>{descripVisibles ? 'Ver mas' : 'Ver menos'}</Button>
        {descripVisibles && (
        <div>
        <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <div style={{display: "flex", flexWrap: "wrap" }}>
      <Card.Text>
            {product.description2}
        </Card.Text>
      <div>En Stock: {product.stock}</div>
      </div>
    </Container>
        </div>
        )}
</div>

        }