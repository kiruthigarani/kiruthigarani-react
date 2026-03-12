import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItem: (state, action) => {
          //  console.log(action.payload);
            const itemWithQuantity = {
                ...action.payload,
                quantity: 1
            };
            state.items.push(itemWithQuantity);
        },
        removeItem: (state, action) => {
                 
           state.items.pop();
           
        },
        updateQuantity: (state, action) =>{
             const item = state.items.find(i => i.id === action.payload);
            if (item){
                item.quantity = (item.quantity || 1) + 1;
            } 
        }

    }
});
export default cartSlice.reducer;
export const {addItem, removeItem,updateQuantity} = cartSlice.actions;
