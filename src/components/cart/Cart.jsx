import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h3>cart {cart.length}</h3>
            <div className="cart-container">
                {
                    cart.map(bottle => <div key={[bottle.id]}>
                        <div className="item">
                            <img key={bottle.id} src={bottle.img} alt="" />
                            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

import PropTypes from 'prop-types';
Cart.propTypes = {
    cart: PropTypes.object,
    handleRemoveFromCart: PropTypes.func
}

export default Cart;