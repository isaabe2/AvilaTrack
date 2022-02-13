import Logged from "./Logged"
import MisCanales from "./MisCanales"
import Navbar from './Navbar'


const MyPage = () =>{
    return(
        <>
        <Navbar/>
         <div class='center'>
        <MisCanales/>
        <Logged/>
        </div>
        </>
    )
}

export default MyPage