import React, {useState} from "react";
import "./itemCount.css";
import {Button} from 'react-bootstrap';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCount = ({stock=5, cantidad=1}) => {
    const [counter, setCounter] = useState(cantidad);

    const handleIncrement = () => {
        if (stock > counter){ 
            setCounter(counter + 1);
        }else {
            console.log ("no hay mas stock")
        };
    };
    
    
    const handleDecrement = () => {
        if (counter > cantidad){
            setCounter(counter - 1);
        };
    };

    return (
        <div className="col-xs-6">
            <div className="product_quantity">
                <Button onClick={handleDecrement} className="me-auto" variant="danger" size="sm"><FontAwesomeIcon icon={faMinus}/></Button> 
                <span className= "ms-3 me-2">Cantidad: {counter}   </span>
                {/* <input className="prod-input" type="text" value="1"/> */}
                <Button onClick={handleIncrement} variant="success" size="sm"><FontAwesomeIcon icon={faPlus}/></Button>
            </div>
        </div>   
    )
}

export default ItemCount;