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
            src: {Ghome},
            alt: "Picture of Grow community members outside the Grow center"
            },
            {
            src: {GMembers},
            alt: "Webpage displaying a list of members"
            },
            {   
            src: {GMap},
            alt: "A Map displaying location of all members by income range"    
            },
            {   
            src: {GGraph},
            alt: "a bar graph income report of number of members by income"    
            }
        ]
    }
    else if (type === 'cg'){
        return  [
            {
            src: {CGHome},
            alt: "landing page for Canada Summer games"
            },
            {   
            src: {CGAthletes},
            alt: "Webpage displaying a list of athletes"    
            },
            {   
            src: {CGLookup},
            alt: "Webpage displaying a lookup management tables"    
            },
            {
            src: {CGAccount},
            alt: "Webpage showcases account management"
            },
        ]
    }
}


