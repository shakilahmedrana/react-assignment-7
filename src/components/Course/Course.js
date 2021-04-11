import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faHeart} from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Course = (props) => {
    const handleEvent = props.handleEvent
    const {name,price,img} = props.courses
    return (
            <div className='container'>
         <div className="picture">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <h5>${price}</h5>
            <button className='btn btn-success' onClick={() => handleEvent(props.courses)}> <FontAwesomeIcon icon={faHeart} /> enroll now</button>
        </div>
        </div>
    );
};

export default Course;