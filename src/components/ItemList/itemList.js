import { useState, useEffect } from "react";
import Item from '../Item/item';

const ItemList = ({products}) => {

    const [productList, setProductList] = useState([]);

    console.log(productList)

    useEffect(() => {
		fetch('https://6158ba3f5167ba00174bbbc9.mockapi.io/api/v1/products')
			.then((response) => response.json())
			.then((data) => setProductList(data));
	}, []);


    return (
        <div>
            <h1>PRODUCTOS A LA VENTA</h1>
            {productList.map((product) => {
                return(
                    <div>
                        <Item data={product}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;