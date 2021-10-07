import React, {useEffect, useState} from 'react';
import ItemCount from './itemCount';


const Item = ({stock, precio = 33000, nombre}) => {

    const [id, setId] = useState(25);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(res => res.json())
        .then(data => setId(data.id))
    }, [])



    return (
        <>
            
            <div className="itemCard">
                <div className="itemCard__content">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                    <p>{nombre}</p>
                    <p>Precio: {precio}</p>
                    <p>Stock: {stock}</p>
                </div>
                <ItemCount stock={stock}/>
            </div>
        </>
    )
}

export default Item