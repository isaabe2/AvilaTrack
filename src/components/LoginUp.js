import { useNavigate } from "react-router-dom"

import React from 'react';

function LoginUp(props) {
    let navigate = useNavigate()
    return (
        <div class='greyBox'>
        <div class='logbtn'>
            <button class='btn' onClick={()=> navigate("/login")}>Login</button>
            <button class='btn' onClick={()=> navigate("/signup")}>Sign Up</button>
        </div>  
       
    </div>
    );
}

export default LoginUp;

