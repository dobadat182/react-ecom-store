import { createSlice } from '@reduxjs/toolkit';

// Hàm lưu trạng thái vào localStorage
const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.warn('Could not save state', e);
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    },

    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );

            state.totalQuantity++;
            state.totalAmount += newItem.price;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }

            // Lưu trạng thái vào localStorage
            saveStateToLocalStorage(state);
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

            // Lưu trạng thái vào localStorage
            saveStateToLocalStorage(state);
        },

        clearCart(state) {
            console.log(state);

            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;

            // Lưu trạng thái vào localStorage
            saveStateToLocalStorage(state);
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selector để lấy số lượng sản phẩm theo ID
export const selectItemQuantity = (state, productId) =>
    state.cart.items.find((item) => item.id === productId)?.quantity || 0;

// Selector để lấy tổng số lượng sản phẩm
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
