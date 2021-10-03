import React, {useState} from "react";
import "./itemCount.css";
import {Button} from 'react-bootstrap';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCount = () => {
    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    const handleDecrement = () => {
        setCounter(counter - 1);
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