import React, { useState } from 'react';
import { ArtistIndex } from './ArtistIndex';
// import { songButton } from './Button';
import { useNavigate } from 'react-router-dom';
import { SongsIndex } from './SongsIndex';



const Card = ({name, abstract, id}) => {
    const [ displaySongs, setDisplaySongs ] = useState(false)
    const seeSongs = () => {
        setDisplaySongs(!displaySongs);
     }
  

    const handleClick = () => {
    goTo(id.toString());
    seeSongs();
 }

 const goTo = useNavigate()
 
 return (
        <>
          <h2>Artist: {name} </h2>
          <button onClick={handleClick}>Top 5 Songs</button>
          {displaySongs && <SongsIndex/> }
          <p>{abstract}</p> 
        </>
        
        
    )
}

export default Card



// const handleClick = () => {
//     return (
//           <ul>
//               {
//                   articles.map(art =>  (
//                       <li key={art.id}>
//                           {art.snippet}
//                       </li>
//                   ))
//               }
//           </ul>
//       )
//   }  
