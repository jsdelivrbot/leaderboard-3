import React from 'react';

const CamperListItem = ({camper, number}) => {

return (
  <tr>
    <td>{number}</td>
    <td> <img src ={camper.img} alt={camper.username}/> <a href={`https://freecodecamp.com/${camper.username}`} target="_blank">{camper.username}</a></td>
    <td>{camper.recent}</td>
    <td>{camper.alltime}</td>
 </tr>

);
}






export default CamperListItem;
