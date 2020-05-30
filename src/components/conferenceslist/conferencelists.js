import React from 'react';

const Conferenceslists = (props) => {
    const {id , title , body} = props
   return (
      
           <tr>
               <td>{id}</td>
               <td>{title}</td>
               <td>6/25/2022</td>
               <td>Istanbul, Turkey</td>
               <td>{body}</td>

           </tr>
   );
}

export default Conferenceslists
