import './Bottle.css'

let Bottle = ({bottle, handlePurchase}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>{price}</p>
            <button onClick={() => handlePurchase(bottle)}>purchase</button>
        </div>
    );
};

import PropTypes from 'prop-types';
Bottle.propTypes = {
    bottle: PropTypes.object,
    handlePurchase: PropTypes.func
}



export default Bottle;