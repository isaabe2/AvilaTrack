
const TopChannel = () => {
    return(
       
            <div class="TopChannel">
                <header class='title'>
                    Top Channels
                </header>
                <div class='comment'>
                <img  src={require('./user.png')} alt='user image' class='cpp'/>
                    <div>
                        <h3>Acabemos con la basura en el avila</h3>
                        <p><a class='userc' href="" >username_</a></p>
                        <p><a class='totalc'>10k</a></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="commenti" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        </svg>
                    </div>
                    

                </div>

                <div class='comment'>
                <img  src={require('./user.png')} alt='user image' class='cpp'/>
                    <div>
                        <h3>Carrera hacia el Humboldt</h3>
                        <p><a class='userc' href="" >Isabella Abeledo</a></p>
                        <p><a class='totalc'>8k</a></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="commenti" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        </svg>
                    </div>
                </div>

               
                </div>
                
                

                

            
            
    )


}

export default TopChannel