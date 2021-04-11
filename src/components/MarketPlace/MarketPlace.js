import React, { useEffect, useState } from 'react';
import falseData from '../../data/falseData.json'
import Course from '../Course/Course';
import Purchase from '../Purchase/Purchase';

const MarketPlace = () => {
    // console.log(falseData)
    const [data,setData] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() =>{
        setData(falseData)
    },[])

    const handleEvent = (courses) => {
        const newCart = [...cart,courses]
        setCart(newCart)
        // console.log('added',courses)
    }
    return (
    <div>
        <div style={{marginLeft:'50px',width:'40%',height:'auto'}}>
        <h2>total course: {data.length}</h2>
        {
          data.map(course => <Course courses={course} handleEvent={handleEvent}></Course>)
        }
    </div>
    <div className="purchase" >
        <Purchase cart={cart}></Purchase>
       
    </div>
    </div>
    );
};

export default MarketPlace;