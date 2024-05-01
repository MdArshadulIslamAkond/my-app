import React from 'react';

const Buttons = ({onClick, name})=> {
        return(
           
                <button className="Btn" onClick={onClick}>{name}</button>
              
            
        )
   
}
   

export default Buttons;