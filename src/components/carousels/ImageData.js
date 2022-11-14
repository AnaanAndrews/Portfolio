//* Grow Project Images

import Ghome from '../../Assets/Images/Grow/Home.png'



import GPos  from '../../Assets/Images/Grow/GrowPOS.PNG'
import GHouseDetails1  from '../../Assets/Images/Grow/HouseDetails1.PNG'
import GHouseDetails2  from '../../Assets/Images/Grow/HouseDetails2.PNG'
import GHouseIndex  from '../../Assets/Images/Grow/houseIndex.png'
import GMap  from '../../Assets/Images/Grow/Map.PNG'


//Portfolio
import PPineSoda from '../../Assets/Images/Portfolio/PineSoda2.jpg'
import PBasketBlend from '../../Assets/Images/Portfolio/Basketblend.jpg'
import PCanBlend from '../../Assets/Images/Portfolio/CanBlend.jpg'
import Updatedbasket from '../../Assets/Images/Portfolio/UpdatedBasket.jpg'


//

import QDarkMain from '../../Assets/Images/QQ/DarkMain.PNG'
import QDarkSignUp from '../../Assets/Images/QQ/DarkSignup.PNG'
import QLightMain from '../../Assets/Images/QQ/LightMain.PNG'



export const ImageData = type =>{
    if (type === 'grow'){
        return  [
            {
            key: "G1",
            src: {Ghome},
            alt: "Picture of Grow community members outside the Grow center"
            },
            {
                key: "G2",
                src: {GMap},
                alt: "webpage displaying map of all client households as well as nearest grocery stores"
                },
            {
            key: "G3",
            src: {GHouseDetails1},
            alt: "Webpage displaying household details page"
            },
            {   
            key: "G4",
            src: {GHouseDetails2},
            alt: "Webpage displaying household details page pt2"    
            },
            {   
            key: "G5",
            src: {GHouseIndex},
            alt: "webpage displaying list of members"    
            },
            {   
                key: "G6",
                src: {GPos},
                alt: "a webpage point of sales system"    
                }
        ]
    }
    if (type === 'port'){
        return  [
            {   
                key: "p1",
            src: {PCanBlend},
            alt: "Screenshot of blender design for Pinesoda can"    
            },
            {
            key: "p2",
            src: {PPineSoda},
            alt: "Render of a Pine - apple Soda Can"
            },
            {
                key: "p3",
            src: {PBasketBlend},
            alt: "Screenshot of blender design for disc golf basket can"    
            },
            { 
                key: "p4",
            src: {Updatedbasket},
            alt: "Render of a disc golf basket"
            },
 
      
        ]
    }
    if (type === 'qq'){
        return  [
            {
            key: "Q1",
            src: {QDarkMain},
            alt: "Screen shot of Quants query website in darkmode"
            },
            { 
                key: "Q2",
            src: {QDarkSignUp},
            alt: "Screen shot of Quants query website signup form"
            },
            {   
                key: "Q3",
            src: {QLightMain},
            alt: "Screen shot of Quants query website in Light mode"    
            },

        ]
    }

}


