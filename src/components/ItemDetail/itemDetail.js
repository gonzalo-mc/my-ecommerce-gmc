import React from 'react'
import ItemCount from '../ItemCount/itemCount'

import { Container, Row, Col } from 'react-bootstrap'


//Styles
// import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    const onAdd = (counter) => {
        console.log('Cantidad: ', counter)
    }

    return (
        <Container>
            <Row xs={1} md={2}>
            <Col>
                <img src={product.image} alt={product.name}></img>
            </Col>
            <Col>
                <h2>{product.name}</h2>
                <p className="company">{product.company}</p>
                <p className='price'>{product.price}</p>
                <p><strong>País: </strong>{product.country}</p>
                <p><strong>Volumen: </strong>{product.volume}</p>
                <p><strong>Estilo: </strong>{product.style}</p>
                <p><strong>Descripción: </strong>{product.description}</p>
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
            </Col>
            </Row>
        </Container>

        
    )
}

export default ItemDetail
