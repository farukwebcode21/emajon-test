import React from 'react'

const Cards = (props) => {
    const {cart} =props;

    // let total = 0;
    // for(const product of cart){
    //     total = total + product.price;
    // }

    // advacne formulat 
    const total = cart.reduce((previous, product) => previous + product.price, 0);
    const shipping = total === 0 ? 0: 15;
    // const shipping = total > 0 ? 15 : 0;
    const beforeTaxPrice = total+ shipping;
    const tax = (total + shipping)*0.1;
    const grandTotal = total + shipping +tax
   
    


    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Item's Ordered :{cart.length}</p>
            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & handling:</td>
                        <td>${shipping}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${beforeTaxPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr id="order-total">
                        <td>Order Total:</td>
                        <td>${grandTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cards
