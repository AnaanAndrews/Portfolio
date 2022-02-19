import './App.scss';
import React, { Suspense,useRef, useEffect, useState} from 'react';
//Components
import { Canvas } from 'react-three-fiber';
import { Section } from './components/section';
import { Html, Environment} from '@react-three/drei';
//Html Elements

import Title from './components/Title.js';
import Projects from './components/projects.js';

//Page States
import state from './components/state.js';

// Model;=
import PineCan from './Assets/Models/LowQualPineCan.js' ;

import Basket from './Assets/Models/DiscExtremlyLowQuality.js'

//Inersection Observer
import {useInView} from 'react-intersection-observer';

//Resume


const Loading = ()=> {

  return(
  <>
  <div>
    <h1>WE BE LOADING</h1>
  </div>
  </>
  )
}

const HtmlContent = ({domContent, children,groupPositionY, position, rotation, bgColor, scale, Model})=>{
  const model = useRef()
  const PostionX = (width, name) => {
    if (name === 'can'){
      if (width >= 2100){
        return 50
      }else if (width >= 1980){
        return 60
      }else if (width >= 1440){
        return  30
      }else{
        return 0
      }
  }
  else{
    if (width >= 2100){
      return 430
    }else if (width >= 1980){
      return 430
    }else if (width >= 1440){
      return  430
    }else{
      return 380
    }
  }

  }



  window.addEventListener('resize', function() {
    if(model == null) return;
    model.current.position.x = PostionX(window.innerWidth, model.current.name)
    
  });

  const [refItem, inView] = useInView({
    threshold: .8,
  
  })
//If Object is in view Change Background colour
  useEffect(() => {
    inView && (document.body.style.backgroundColor = bgColor)
  
  })
 
  return(

    <Section  factor={1.5} offset={1}>
      <group position={[0,groupPositionY,0]}>
        <mesh ref={model} name={Model} position={[PostionX(window.innerWidth, Model), position[1], position[2]]} rotation={rotation} scale={scale}  >
        {GetModel(Model={Model})}
        </mesh>
        <Html portal={domContent} fullscreen>
          <div  ref={refItem}>{children}</div>
          </Html> 
          
      </group>
    </Section>
    
  )
}

const GetModel = ({Model})=>{
if (Model === 'can')
  return <PineCan/>
if (Model === 'basket')
return <Basket/>
else return

}





function App() {

  //loading
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)

  }, [])


  //Scoll Section
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop)

  useEffect(() => void onScroll({target: scrollArea.current}), [])

 


  return (
    <>
  
    <Canvas colorManagment camera={{position: [0,0,120], fov:70, rotation: [0,0,0]}} > 
      <Suspense fallback={<h1>Meth</h1>}>
        <Environment files="winter_evening_1k.hdr"/>
        {/* <Environment files="comfy_cafe_1k.hdr"/> */}
          <HtmlContent  
          domContent={domContent} 
          groupPositionY={370} 
          position={[0,window.innerWidth >= 1000? -25: -35,0]} 
          rotation={[window.innerWidth >= 1000? .3: .2,0,0]}
          scale={window.innerWidth >= 1000? 3.5: 4.5}
          bgColor={'#f15946'}
          Model={'can'}>
            <Title/>
          </HtmlContent>
          <HtmlContent 
          domContent={domContent} 
          groupPositionY={150} 
          position={[430,-130,0]} 
          rotation={[0,0,0]}
          scale={100}
          // bgColor={'#002233'}
          bgColor={'#333333'}
          Model={'basket'}>    

              <div  className='centered'>
              <h1 id="about" >About me</h1>
              <div className='Description'>
              <p>I am a full-stack developer who is hunting to conquer new and exciting programming / design challenges. I’m always looking to expand my toolset by learning new technologies And then implementing them in unique ways.</p>
              <p >Outside of programming, I enjoy spending my time creating and texturing 3D models with blender and substance painter and throwing discs into baskets in disc golf.</p>
              </div>
            </div>
                
          </HtmlContent>
          <HtmlContent 
          domContent={domContent} 
          groupPositionY={-50} 
          position={[0,-100,0]} 
          rotation={[1,0,0]}
          scale={3.5}
          bgColor={'#333333'}
          Model={'none'}>
              <div className='top'>
                <h1>Skills</h1>
                <h2>What I'm best at!</h2>
                <div id="project"  className='SkillContainer'></div>
              </div>
          </HtmlContent>
          <HtmlContent 
          domContent={domContent} 
          groupPositionY={-250} 
          position={[0,-100,0]} 
          rotation={[1,0,0]}
          scale={3.5}
          bgColor={'#333333'}
          Model={'none'}>
              <Projects />
          </HtmlContent>
          <HtmlContent 
          domContent={domContent} 
          groupPositionY={window.innerWidth >= 1000? -500: -790} 
          position={[0,-100,0]} 
          rotation={[1,0,0]}
          scale={3.5}
          bgColor={'#333333'}
          Model={'none'}>
          
            <div className='contact'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f15946" d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,128C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="contact-info">
              <div className="title">
                <h2>Like what you see?</h2>
                <h1 id="contact">Hire Me</h1>
                </div>
                <ul>
                <li>
                <h3>Email</h3>
                <h2>AnaanAndrews@gmail.com</h2>
                </li>
                <li>
                <h3>Mobile</h3>
                <h2>(289)-501-9132</h2>
                </li>
                <li className="btn">
              
                  <a  href="./AnaanAndrewsResume.pdf" download='AnaanAndrewsResume.pdf'>Download Resume</a>
                </li>
               
                </ul>
            </div>
            </div>
          </HtmlContent>


    </Suspense>

    </Canvas>

    <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
      <div style={{position: 'sticky', top:0}}ref={domContent}></div>
      <div style={{width: `${100}%`, height: `${state.pages * (window.innerWidth >= 1000? 113: 140)}vh`}}></div>
    </div>
    
    </>
  );
}

export default App;
