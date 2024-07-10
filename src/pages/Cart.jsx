import CartItem from '@/components/common/cart/CartItem';
import { clearCart } from '@/features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="container">
            <button
                onClick={handleClearCart}
                className="px-4 py-2 mt-3.5 text-xs font-medium rounded-md md:mt-5 md:text-sm bg-slate-950 text-slate-50 hover:bg-transparent hover:text-zinc-950 transition-all hover:border hover:border-zinc-950 "
            >
                Clear Cart
            </button>

            <div className="flex gap-x-5">
                <div className="basis-3/4 bg-slate-200">
                    <div className="p-5 bg-slate-100 rounded-xl mb-7">
                        <h2>Your Cart</h2>
                        <p>Total Quantity: {totalQuantity}</p>
                        <p>Total Amount: {totalAmount} $</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {cartItems.length === 0 ? (
                            <p>Cart is empty</p>
                        ) : (
                            cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        )}
                    </div>
                </div>
                <div className="basis-1/4 bg-slate-100">Total</div>
            </div>
        </div>
    );
};

export default Cart;
