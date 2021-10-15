import React, { useEffect, useState } from 'react'
import {addToDb, getStoredCart} from '../../src/utilities/fakedb'
import Cards from './Cards';
import Products from './Products';


const Shops = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[]);

    useEffect(()=>{
        if(products.length){
            const saveCart = getStoredCart();
            const storeCart = [];
            for(const key in saveCart){
                // console.log(key);
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    console.log(addedProduct);
                    storeCart.push(addedProduct);

                }
            }
            setCart(storeCart);
        }
    },[products])

    const handleAddToCard =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        // Save to Local storage 
        addToDb(product.key);
        
    }
    

    return (
        <div className="products-container">
            <div className="products">
                {
                    products.map(product => <Products key={product.key} product={product} handleAddToCard={handleAddToCard} />)
                }
            </div>
            <div className="card">
                <Cards cart={cart}/>
            </div>
        </div>
    )
}

export default Shops
