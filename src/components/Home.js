import LoginUp from "./LoginUp"
import Navbar from "./Navbar"
import TopChannel from "./TopChannel"

const Home = () =>{
    return(
        <>
        <Navbar></Navbar>
        <div class='center'>
        <TopChannel/>
        <LoginUp/>
        </div>
        </>
    )
}

export default Home