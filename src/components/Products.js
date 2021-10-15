import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    // console.log(props.product);
    const {img, name, price, seller, stock} = props.product;

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="produt-detail">
                <h3>{name}</h3>
                <p>B<small>y: {seller}</small></p>
                <h4>${price}</h4>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=> props.handleAddToCard(props.product)} id="add-to-cart-btn">{element} add To cart</button>
            </div>
           
        </div>
    )
}

export default Products
