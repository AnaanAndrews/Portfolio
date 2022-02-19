import { useRef, useState } from 'react';
import './Carousel.scss';
const Carousel = ({images})=> {
    const carousel = useRef();
    const [count,setCount] = useState(0)
    const increment = delta=>{ 
        if(!carousel.current) return   
            const width = carousel.current.offsetWidth;

            if((count + delta) > (images.length - 1)){ 
                setCount(0)
                carousel.current.scrollTo(0,0)
                return
            } 
            if (count + delta < 0){
                setCount(images.length - 1)
                carousel.current.scrollTo(carousel.current.scrollLeft + (width * (images.length  - 1)), 0)
                return
            }
        
            carousel.current.scrollTo(carousel.current.scrollLeft + (width * delta), 0)
            setCount(c=> c + delta)
    }

    return <div className='carousel-container'>
        <input type="button" className="carousel-btn left" value="&#8249;" onClick={() => increment(-1)}/>
        <input type="button" className="carousel-btn right"value="&#8250;" onClick={() => increment(1)}/>
        <div className="carousel" ref={carousel}>
            {images.map((img, idx) => (<div className="carousel-item">
                <img src={Object.values(img.src)[0]} alt={img.alt} key={img.key}></img>
                
            </div>))}
        </div>
    </div>
};
export default Carousel

