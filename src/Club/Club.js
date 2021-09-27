import React from 'react';
import './Club.css';
const Club = (props) => {
    // console.log(props.addedMember);
    const {addedMember}= props;
    
    let total =0;
    
    for(const member of addedMember){
        total = total + member.salary;
    
    }
    let person =[];
    for(const member of addedMember){
      person=  member.name;
      console.log(person);
    }
    
    
    return (
        <div >
            <div className="col-md-12  right-side club-cart">
                <h3>Club Details</h3>
                <h4>Total Persons Added: <span>{props.addedMember.length}</span></h4>
                <h5>Total Salary: $<span>{total}</span></h5>
               
                <div>
                    <h5>Name: <span>{person}</span></h5>
                </div>
            </div>
            
        </div>
    );
};

export default Club;