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

    return (
        <div >
            <div className="row">
                <div className="col-md-9 left-side">
                    <div className="row">
                        {
                        users.map(user=>(<AllUsers 
                            key={user.key}
                            user={user}></AllUsers>))
                        }
                    </div>
                </div>
                <div className="col-md-3">

                </div>
            </div>
            
        </div>
    );
};

export default Home;