import React, { useState } from 'react';
import { ArtistIndex } from './components/ArtistIndex';
import Card from './components/Card'


// const App = () => {
//     const artists = [
//         {id: 1, name: "Amaarae", abstract: "Ama Serwah Genfi, also known as Amaarae, is a 27 year old Ghanian singer, songwriter, producer and engineer. Her most popular release 'Sad Gurls Luv Money' gained her international recongition as well as her feature in Vogue Magazine online. She has collaborated with Tems, Stonebwoy, Santi, Buju and more."},
//         {id: 2,   name: "Rema", abstract: "Divine Ikubor, also known as Rema, is a 21 year old Nigerian singer and rapper. He rose to fame after the release of the popular song 'Dumebi' and has since released more popular songs such as 'Bounce', 'Woman' and 'Soundgasm'. He calls his sound 'Afrorave', a subgenre of Afrobeats with influences of Arabian and Indian music."},
//         {id: 3, name: "Tems", abstract: "Temilade Openiyi, also known as Tems, is a 26 year old Nigerian Singer. She has collaborated with well known artists such as Drake on the song 'Fountains' and Wizkid on 'Essence'. In 2021, she ranked number one on the Billboard Next Big Sound chart, number five on the Billboard Emerging Artist chart and her second EP 'If Orange Was a Place' also reached the top ten on the Billboard World Albums chart. "},
//         {id: 4, name: "Wizkid", abstract:"Ayodeji Ibrahim Balogun, also known as Wizkid, is a 31 year old Nigerian singer and songwriter. He began his music career at the age of 11 but gained popularity after the release of his first album 'Superstar' in 2011. Since then he has released songs with popular artists such as Beyonce, Drake and Justin Bieber. In 2021, he was the most streamed Nigerian artist of all time on Spotify with over 3.4 billion streams." }
//       ]
  
//      const renderArtists = () => artists.map(artist => <Card name={artist.name} abstract={artist.abstract} />)
    
//     return (
//         <>
//             <h1>Leanne's Top African Artists</h1>
//             {renderArtists()}
//         </>
//     )
// }

/* <>
//             <button>-</button>
//             <span>0</span>
//             <button>+</button>
//         </> */
// export default App

function App () {
    return (
        <>
        {renderArtists()}
        <Card />
        </>
    )
}

export default App
