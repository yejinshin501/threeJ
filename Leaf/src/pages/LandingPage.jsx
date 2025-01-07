import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LandingPage(){
useEffect (()=>{
    axios.get('/api/hello')
    .then(response => console.log(response.data))
},[])
return(
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '100vh'
    }}>

        <h2>시작페이지</h2>
        <Link className="Notice" to={'/notice'}>Notice</Link>
    </div>
)
}

export default LandingPage;