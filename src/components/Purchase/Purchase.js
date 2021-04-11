import React from 'react';

const Purchase = (props) => {
    // console.log(props)
    const cart = props.cart
    // const newCart = cart.reduce((total,course) => total + course.price,0)
    // console.log(newCart)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price        
    }
    return (
        <div>
            <h4>My Cart: {cart.length} </h4>
            <h5>total price: ${total}</h5>

        </div>
    );
};

export default Purchase;