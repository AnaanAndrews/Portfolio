//* Grow Project Images

import Ghome from '../../Assets/Images/Grow/Home.png'
import GMembers from '../../Assets/Images/Grow/Members.png'
import GMap from '../../Assets/Images/Grow/Map.png'
import GGraph from '../../Assets/Images/Grow/Graph.png'



//* CanadaGames
import CGHome from '../../Assets/Images/CanadaGames/CGHome.png'
import CGAccount from '../../Assets/Images/CanadaGames/CGAccount.png'
import CGAthletes from '../../Assets/Images/CanadaGames/CGAthletes.png'
import CGLookup from '../../Assets/Images/CanadaGames/CGLookup.png'

export const ImageData = type =>{
    if (type === 'grow'){
        return  [
            {
            key: 1,
            src: {Ghome},
            alt: "Picture of Grow community members outside the Grow center"
            },
            {
            key: 2,
            src: {GMembers},
            alt: "Webpage displaying a list of members"
            },
            {   
            key: 3,
            src: {GMap},
            alt: "A Map displaying location of all members by income range"    
            },
            {   
            key: 4,
            src: {GGraph},
            alt: "a bar graph income report of number of members by income"    
            }
        ]
    }
    else if (type === 'cg'){
        return  [
            {
            key: 5,
            src: {CGHome},
            alt: "landing page for Canada Summer games"
            },
            { 
            key: 6,
            src: {CGAthletes},
            alt: "Webpage displaying a list of athletes"    
            },
            {   
            key: 7,
            src: {CGLookup},
            alt: "Webpage displaying a lookup management tables"    
            },
            {
            key: 8,
            src: {CGAccount},
            alt: "Webpage showcases account management"
            },
        ]
    }
}


