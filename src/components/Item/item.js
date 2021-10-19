import React from "react";
// import{Link} from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import {Card, Button} from 'react-bootstrap';


const Item = ({ data }) => {
    return (
        <div>
        <Card className="my-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.country}</Card.Text>
                <ItemCount/>
                {/* <ItemCount onAdd={onAdd}/> */}
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    </div>
    )
}

export default Item