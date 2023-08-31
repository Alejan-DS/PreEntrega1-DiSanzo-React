
import { useState } from "react"

const stock = 4;

export const ContadorItem = () =>{
    const [contador, setContador] = useState(1)

    const botonRestar = () => {
        if(contador > 1){

            setContador( (prev) => prev - 1)
        }
    }

        const botonSUmar = () => {
            if(stock > contador){
    
                setContador( (prev) => prev + 1)
            }    
    }

    const onAdd = () => {
        alert("Vas a agregar "+contador+" productos" )
}

    return (
        <div className="contador">
            <span onClick={botonRestar}>-</span>
            <span>{contador}</span>
            <span onClick={botonSUmar}>+</span>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
    
}