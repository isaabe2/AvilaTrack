import {React,useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar'


function Login(props) {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const login = async ()=>{
        await axios.post('http://localhost:3000/login/', {email,password}, {headers: {'content-type': 'aplication/json'}});
        navigate('/home')
    }

    return (
        <>
        <Navbar/>
        <div class='center'>
        <div class='box1'>
            <div class='boxinput'>
                <input class='e' type="text" placeholder=" EMAIL" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input class='e' type="text" placeholder=" CONTRASEÑA" value={password} onChange={e => setPassword(e.target.value)}></input>

            </div>

            <button class='Signupbtn'onClick={() => login()}>Login</button>
            <p><a class='fp' href="" >No recuerdas tu clave?</a></p>
            <p class='rgst'>No tienes cuenta?<a class='fp2' href="" >Registrate</a></p>


        </div>
    </div>
    </>
    );
}


export default Login