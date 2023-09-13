import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../utilities/localStorage";
import Cart from "../cart/Cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load cart from ls
    useEffect(() => {
        console.log('called useEffect', bottles.length);
        if (bottles.length) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            const savedCart = [];

            for(const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle) {
                    savedCart.push(bottle);
                }
            }
            // storedCart.map(bottle => {
            //     if (bottles.find(bottle => bottle.id === bottle)) {
            //         savedCart.push(bottle)
            //     }
            // })
            console.log('saved cart', savedCart);
            setCart(savedCart);
        }
    }, [bottles])

    const handlePurchase = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        // visual cart
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from ls
        removeFromLS(id);
    }

    return (
        <div>
            <h3>memorable water bottle {bottles.length}</h3>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handlePurchase={handlePurchase}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};



export default Bottles;