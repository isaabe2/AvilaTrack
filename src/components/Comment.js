import React from 'react';


function Comment(props) {
    return (
        <div class='commentBox'>
        <textarea cols='10' rows='5'class='commentxt' placeholder='Comenta aqui....'></textarea>
        <p class='commentbtn'><a>LISTO!</a></p>
    </div>
    );
}

export default Comment;

