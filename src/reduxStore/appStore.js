
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
const appStore = configureStore({
    reducer: {
        cartConfig: cartReducer,
       },
});
export default appStore;