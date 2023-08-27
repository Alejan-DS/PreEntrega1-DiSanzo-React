
import productosData from './productos.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const MyProducts = () => {
    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {productosData.map(producto => (
                    <div key={producto.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={producto.imagen} alt={producto.nombre}/>
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>
                                <div>{producto.description1}</div>
                                <div>{producto.description2}</div>
                                </Card.Text>
                                <Button variant="primary">AGREGAR AL CARRITO</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </ul>
        </div>
    );
}

