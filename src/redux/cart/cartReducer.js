import {ADD_ITEM, CLEAR_ITEM_FROM_CART, TOGGLE_CART_HIDDEN} from "./cartTypes";
import {addItemToCart} from "./cartUtils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state, hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload],
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        default:
            return state
    }
}