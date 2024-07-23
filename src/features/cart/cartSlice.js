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
        sideBar: false,
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
                    images: newItem.images,
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

        toggleSidebar(state, action) {
            state.sideBar = action.payload; // Nhận giá trị từ payload
            saveStateToLocalStorage(state);
        },
    },
});

export const { addToCart, removeFromCart, clearCart, toggleSidebar } =
    cartSlice.actions;
export default cartSlice.reducer;

/* ------------- Selector ------------- */
export const selectItemQuantity = (state, productId) =>
    state.cart.items.find((item) => item.id === productId)?.quantity || 0;

export const selectSidebarState = (state) => state.cart.sideBar;

export const selectItems = (state) => state.cart.items;

export const selectTotalQuantity = (state) => state.cart.totalQuantity;
