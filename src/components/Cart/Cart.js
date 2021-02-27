import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    //let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation=totalPopulation+country.population;
    // }
    let totalPopulation=cart.reduce((ack,item)=>ack+item.population,0);
    
    return (
        <div>
           <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;