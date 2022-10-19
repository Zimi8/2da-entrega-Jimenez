import { useEffect, useState } from "react" 

import { getProductById } from "../asyncMock"
import itemDetail from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'
//Este hook permite traer los parámetros dinámicos de App.js


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}) 
    const [cargando, setCarga] = useState(true)
    const { productId } = useParams()

    
    useEffect(() => {
        setCarga(true)
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setCarga(false)
        })
    }, [productId])

    if (cargando) {
        return ( 
        <div className= "center">
        <h3 className= "center">Cargando informacion de los Sets</h3>
        
    </div>
        )
    }

    return (
        <div>
            <h1 className= "center">Detalles del Set</h1>
            <itemDetail key={product.id} {...product} />
        </div>
    )
}

export default ItemDetailContainer