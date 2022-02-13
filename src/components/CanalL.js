import Canal from "./Canal"
import Comment from "./Comment"
import Feed from "./Feed"
import Navbar from './Navbar'


const CanalL =() =>{
    return(
        <>
        <Navbar/>
         <div class='center'>
            <Canal/>
            <Feed/>
            <Comment/>
            
        </div>
        </>
    )
}

export default CanalL