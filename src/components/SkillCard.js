
import React , {useEffect,useRef} from "react";

const SkillCard = ({icon, title, extraPadding, SRHidden}) =>  {

const card = useRef("card")


    useEffect(() => {
        
   const handleOnMouseMove = e => {
    const {currentTarget: target} = e;

    const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
   }

   const element = card.current;

   element.addEventListener('mousemove', handleOnMouseMove);

   return () => {
    element.removeEventListener('mousemove', handleOnMouseMove);

   }
    }, []);






    return(
    

        <div className="card" ref={card}>
       <div className="card-border"></div>
        <div className="card-content" >

            
            <img aria-hidden={SRHidden} className={"project-icon "+ extraPadding} src={icon} alt={title + " Icon"}></img>
            <h1  aria-hidden={SRHidden}  className="body-text white-text text-light text-center mt0 mhide">{title}
        </h1>

   
        </div>
        
            </div>
     
        );


}



export default SkillCard;