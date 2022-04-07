import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const SongsIndex = () => {
    const songsList = [
            {id: 1, songs: ["SAD GIRLS LUV MONEY ft Moliy", "SAD GIRLS LUV MONEY REMIX ft Kali Uchis ft Moily", "LEAVE ME ALONE", "FEEL A WAY", "JUMPING SHIP"]}
            // {id: 2, songs: ["SAD GIRLS LUV MONEY ft Moliy", "SAD GIRLS LUV MONEY REMIX ft Kali Uchis ft Moily", "LEAVE ME ALONE", "FEEL A WAY", "JUMPING SHIP"]},
            // {id: 3, songs: ["SAD GIRLS LUV MONEY ft Moliy", "SAD GIRLS LUV MONEY REMIX ft Kali Uchis ft Moily", "LEAVE ME ALONE", "FEEL A WAY", "JUMPING SHIP"]},
            // {id: 4, songs: ["SAD GIRLS LUV MONEY ft Moliy", "SAD GIRLS LUV MONEY REMIX ft Kali Uchis ft Moily", "LEAVE ME ALONE", "FEEL A WAY", "JUMPING SHIP"]},

        ]

        const { singerId } = useParams();
        const findArtistId = songsList.find(item => item.id === singerId) 

        return (
            <ul>
            {
                findArtistId.songs.map(song =>  (
                    <li>
                        {song}
                    </li>
                ))
            }
            </ul>
        )

        // <>
        // <ul>
        //     <li>SAD GIRLS LUV MONEY ft Moliy</li>
        //     <li>SAD GIRLS LUV MONEY REMIX ft Kali Uchis ft Moily</li>
        //     <li>LEAVE ME ALONE</li>
        //     <li>FEEL A WAY</li>
        //     <li>JUMPING SHIP</li>
        // </ul>
        // <ul>
        //     <li>Calm Down</li>
        //     <li>Soundgasm</li>
        //     <li>Dumebi</li>
        //     <li>Time N Affection</li>
        //     <li>Woman</li>
        // </ul>
        // <ul>
        //     <li>Essence ft Tems</li>
        //     <li>Fountains ft Tems</li>
        //     <li>Found ft Brent Faiyaz</li>
        //     <li>Free Mind</li>
        //     <li>Crazy Tings</li>
        // </ul>
        // <ul>
        //     <li>Essence ft Tems</li>
        //     <li>System ft Wizkid</li>
        //     <li>Mood ft Buju</li>
        //     <li>Joro</li>
        //     <li>Ginger ft Burna Boy</li>
        // </ul>
        // </>

        
}
