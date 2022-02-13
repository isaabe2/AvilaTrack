import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function Signup() {
   
   const [user,setUser] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const navigate = useNavigate();


    const signup = async ()=>{
        await axios.post('http://localhost:3000/signup/', {user,email,password}, {headers: {'content-type': 'aplication/json'}});
        navigate('/home')
    }
    

    return (
        <div class='center'>
            <div class='box1'>
                <div class='boxinput'>
        
                    <input class='e' type="text" placeholder=" EMAIL" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input class='e' type="text" placeholder=" USERNAME" value={user} onChange={e => setUser(e.target.value)}></input>
                    <input class='e' type="text" placeholder=" CONTRASEÑA" value={password} onChange={e => setPassword(e.target.value)}></input>

                </div>

                <button class='Signupbtn' onClick={() => signup()}>Sign Up</button>
                <p><a class='fp' href="" >No recuerdas tu clave?</a></p>
                


            </div>
        </div>
    )
    }

export default Signup




    