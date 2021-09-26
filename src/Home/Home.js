import React, { useState } from 'react';
import { useEffect } from 'react';
import AllUsers from '../AllUsers/AllUsers';
import './Home.css';


const Home = () => {

    const [users,setUsers] = useState([]);
    // console.log(users);

    useEffect(()=>{
        fetch('./superstars.JSON')
        .then(res=>res.json())
        .then(data => setUsers(data))
    },[])
     
    const [addedMember, setAddedMember]= useState([]);
    const handleAddToClub = (newMember)=>{
        const newAddedMember = [...addedMember, newMember];
        // console.log(newMember);
        setAddedMember(newAddedMember);

    }
    console.log(addedMember);
    return (
        <div >
            <div className="row">
                <div className="col-md-9 left-side">
                    <div className="row">
                        {
                        users.map(user=>(<AllUsers 
                            handleAddToClub={handleAddToClub}
                            key={user.key}
                            user={user}></AllUsers>))
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12  right-side">
                            <h4>this is h4 {addedMember.length}</h4>
                            {/* {
                                addedMember.map(member=>(console.log(member))
                            } */}
                          
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;