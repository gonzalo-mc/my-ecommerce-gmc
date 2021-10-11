import React, {useState, useRef, useEffect} from "react";
import "./itemCount.css";
import {Button} from 'react-bootstrap';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCount = ({stock=7, initial=1, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const isInitialMount = useRef(true);

    const increment = () => {      // donde subo la cantidad de elementos a comprar
        if (stock > counter){ 
            setCounter(counter + 1);
            // console.log(counter)
        }else {
            console.log ("llego al limite del stock disponible")
        };
    };
    


    const decrement = () => {      // donde bajo la cantidad de elementos a comprar
        if (counter > initial){
            setCounter(counter - 1);
        };
    };



    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            onAdd(counter)
        }
    })



    return (
        <div className="col-xs-6">
            <div className="product_quantity">
                <Button onClick={decrement} className="me-auto" variant="danger" size="sm"><FontAwesomeIcon icon={faMinus}/></Button> 
                <span className= "ms-3 me-2">Cantidad: {counter}   </span>
                {/* <input className="prod-input" type="text" value="1"/> */}
                <Button onClick={increment} variant="success" size="sm"><FontAwesomeIcon icon={faPlus}/></Button>
            </div>
            <Button onClick={() => onAdd(counter)} variant="primary">Agregar al carrito</Button>
        </div>   
    )
}

export default ItemCount;