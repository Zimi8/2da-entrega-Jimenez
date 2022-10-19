/*CONTADOR*/ 
import { useState } from "react"


let simuladorStock = 10

const Counter = ({onAdd}) => {
  const [count, setCount] = useState(0)
  
    
    const incrementador = () => {
        if (count < simuladorStock) {
            setCount (count +1)
            }
        }

    const reductor = () => {
        if (count >0){
            setCount (count -1)
            }
        }

    return (
        <div>
            <h5>Cantidad</h5>
            <h6> {count} </h6>
            <button onClick={reductor}>Menos</button>
            <button onClick={incrementador}>Más</button>
            <button onClick={onAdd}>Agregar Cart</button>
        </div >
    )
}

export default Counter











/*   const decrementor = () => {
    if (count > 0) {
    setCount(count - 1)}
    }
 
const increment = () => {
setCount(count +1) /** no le ponemos ++ porque muta el estado */
//}
 
//return (
/* <div>
<h1> {title}</h1>
<h2>{count}</h2>
{  count !== 0?  <h2>{count}</h2> :null}
<button onClick={decrementor}>Restare </button>
<button onClick={increment}>Sumare </button>
<button onClick={( ) => setTitle('Titulo has been changed') } >Cambiar titulario</button>
 
</div>
  */ 