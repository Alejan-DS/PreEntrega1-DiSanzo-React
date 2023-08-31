import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemDetail } from './ItemDetail';



export const ItemList = ({ products }) =>


 products.map((product) =>
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img style={{ height: "12rem" }} variant="top" src={require(`../assets/img/${product.imagen}`)} />
    <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
            {product.description1}
        </Card.Text>
            <ItemDetail />
        <Card.Text>
            <strong>Precio: ${product.precio}</strong>
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
    </Card.Body>
</Card>
)