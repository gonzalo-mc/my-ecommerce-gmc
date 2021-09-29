import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faShoppingCart} from "@fortawesome/free-solid-svg-icons";


const CartButton = () => {
    return(
            <Button className="me-4" variant="primary">
                <FontAwesomeIcon icon={faShoppingCart}/>
            </Button>
    );
};

export default CartButton;