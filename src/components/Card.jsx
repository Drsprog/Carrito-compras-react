import { useState } from "react"
import '../styles/card.css'

export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleAumentar, handleDisminuir}) => {
    const [added, setAdded] = useState(false)

    const clickQuitar=()=>{
        handleQuitar()
        setAdded(false)
    }
    const clickAgregar=()=>{
        handleAgregar()
        setAdded(true) 
    }

    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}</p>
                {added
                ? <button
                    type="button"
                    className="boton-quitar"
                    onClick={clickQuitar}
                >
                    Quitar del carrito
                </button>
                : <button
                    type="button"
                    className="boton-agregar"
                    onClick={clickAgregar}
                >
                    Agregar al carrito
                </button>
            }
            </div>
            
        </div>
    )
}
