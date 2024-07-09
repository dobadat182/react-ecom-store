import { removeFromCart } from '@/features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="bg-slate-100 p-5 rounded-xl">
            <h3>{item.title}</h3>
            <p>{item.price} VND</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: {item.totalPrice} VND</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
            </button>
        </div>
    );
};

export default CartItem;
