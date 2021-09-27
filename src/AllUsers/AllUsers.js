import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser} from '@fortawesome/free-solid-svg-icons';

import './AllUsers.css';

const AllUsers = (props) => {

    // console.log(props);
    const {name, age, bornIn,proffesion, salary,img}= props.user;
    const icon = <FontAwesomeIcon icon={faUser} />
    return (
        <div className="col-md-4">
            <div className="user-div">
                <div className="user-image">
                    <img src={img} alt="" />
                </div>
                <h5>Name: {name}</h5>
                <h5>Age: {age}</h5>
                <h5>BornIn: {bornIn}</h5>
                <h5>Proffession: {proffesion}</h5>
                <h5>Salary: {salary}</h5>
                <button onClick={()=>props.handleAddToClub(props.user)} className="btn btn-success">{icon} Add to Club</button>
            </div>
        </div>
    );
};

export default AllUsers;