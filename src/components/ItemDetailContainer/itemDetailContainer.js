import React, { useState, useEffect } from 'react';
import axios from 'axios';

import itemDetail from '../ItemDetail/itemDetail';

const ItemDetailContainer = ({ match }) => {
    let itemId = match.params.id;
    const [item, setItem] = useState([])
    useEffect(() => {
		axios(`https://6158ba3f5167ba00174bbbc9.mockapi.io/api/v1/products/?id=${itemId}`).then((res) =>
            setItem(res.data)
		);
	}, [itemId]);
    
    return (
        <div>
            {item.map((product) => {
                return (
                    <itemDetail key={product.id} product={product}></itemDetail>
                )
            })}
        </div>
    )
}

export default ItemDetailContainer