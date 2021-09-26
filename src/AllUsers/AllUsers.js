import React from 'react';
import './AllUsers.css';

const AllUsers = (props) => {
    console.log(props.user);
    const {name, age, bornIn,proffesion, salary,img}= props.user;
    return (
        <div className="col-md-4">
            <div className="user-div">
                <div className="user-image">
                    <img src={img} alt="" />
                </div>
                <h4>Name: {name}</h4>
                <h4>Age: {age}</h4>
                <h4>BornIn: {bornIn}</h4>
                <h4>Proffession: {proffesion}</h4>
                <h4>Salary: {salary}</h4>
                <button className="btn btn-primary">Add to Club</button>
            </div>
        </div>
    );
};

export default AllUsers;