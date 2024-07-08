import { addToCart, removeFromCart } from './cartSlice';

export const asyncAddToCart = (item) => async (dispatch) => {
    // Bạn có thể thực hiện các thao tác async như gọi API ở đây.
    dispatch(addToCart(item));
};

export const asyncRemoveFromCart = (id) => async (dispatch) => {
    // Thực hiện các thao tác async nếu cần thiết.
    dispatch(removeFromCart(id));
};
