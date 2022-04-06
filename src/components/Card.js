import React from 'react';
import { ArtistIndex } from './ArtistIndex';

const Card = ({name, abstract}) => {
    return (
        <>
          <h2>Artist: {name} </h2> 
          <p>{abstract}</p> 
        </>
        
        
    )
}

export default Card
