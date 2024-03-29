import React from 'react';
import { getShipping, getTotal } from '../../utilities/calculate';
import './Cart.css';

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = +((total+shipping+tax).toFixed(2));

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Shipping: $ {shipping}</p>
            <p>Tax: $ {tax}</p>
            <h5>Grand Total: $ {grandTotal}</h5>
        </div>
    );
};

export default Cart;