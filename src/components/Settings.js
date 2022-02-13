const Settings = () => {


    return (
        <div class='center'>
            <div class='box1'>
            <a href=''> <img  src={require('./user.png')} alt='user image' class='user2'/></a>
                <div class='boxinput'>
                    
                    <input class='e' type="text" placeholder=" NUEVO USERNAME"></input>
                    <input class='e' type="text" placeholder=" NUEVA CONTRASEÑA"></input>

                </div>

                <button class='Signupbtn'><a>ACTUALIZAR</a></button>
            


            </div>
        </div>
    )
    }

export default Settings