import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeItemHandler = () => {
        dispatch(removeFromCart(item.id));
    };

    return (
        <div>
            <h3>{item.title}</h3>
            <p>
                {item.price} $ x {item.quantity} = {item.totalPrice} $
            </p>
            <button onClick={removeItemHandler}>Remove</button>
        </div>
    );
};

export default CartItem;
