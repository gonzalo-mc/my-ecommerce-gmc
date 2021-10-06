import ItemCount from "./itemCount";
import { Card, Button} from 'react-bootstrap';




const ItemListContainer = (props) => {

    const onAdd = (counter) => {
        console.log('Cantidad: ', counter)
    }


    return (
        <div>
            <Card className="my-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.greeting}
                        {/* Some quick example text to build on the card title and make up the bulk of
                        the card's content. */}
                    </Card.Text>
                    <ItemCount onAdd={onAdd}/>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemListContainer

// "holder.js/100px180"