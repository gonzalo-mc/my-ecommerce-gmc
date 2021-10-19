
import ItemList from "../ItemList/itemList";
import React from "react";
import { Container } from 'react-bootstrap';


const ItemListContainer = () => {



    return (
        <div>
            {/* <Container>
                <div className="row"> 
                    <div className="col-md-3">
                        <ItemList/>
                    </div>
                </div>
            </Container>           */}
            <ItemList/>
        </div>
    );
};

export default ItemListContainer
