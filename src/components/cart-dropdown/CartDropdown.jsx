import React from "react";
import {connect} from "react-redux";
import {CustomButton} from "../custom-button/CustomButton";
import {CartItem} from "../cart-item/CartItem";
import './CartDropdown.scss'
import {selectCartItems} from "../../redux/cart/cartSelectors";
import {createStructuredSelector} from "reselect";

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)) :
                    (<span className='empty-message'>Your cart is empty</span>)

            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)

