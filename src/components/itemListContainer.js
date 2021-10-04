import ItemCount from "./itemCount";
import { Card, Button, CardImg, CardImgProps, CardProps} from 'react-bootstrap';

const ItemListContainer = (props) => {
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
                    <ItemCount/>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemListContainer

// "holder.js/100px180"