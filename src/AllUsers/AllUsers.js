import React from 'react';
import './AllUsers.css';

const AllUsers = (props) => {

    // console.log(props);
    const {name, age, bornIn,proffesion, salary,img}= props.user;
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
                <button onClick={()=>props.handleAddToClub(props.user)} className="btn btn-primary">Add to Club</button>
            </div>
        </div>
    );
};

export default AllUsers;