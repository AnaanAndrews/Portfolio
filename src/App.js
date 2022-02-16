import './App.scss';
import React, { Suspense,useRef, useEffect} from 'react';
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
import PineCan from './Assets/Models/Pineapplesoda.js' ;

import Basket from './Assets/Models/DiscLowQual'

//Inersection Observer
import {useInView} from 'react-intersection-observer';



// const Lights = () => {
//   return(
//     <>
//     {/* <directionalLight position={[-120,140,110]} intensity={1}/> */}
//     {/* <pointLight position={[150,50,200]} intensity={.1}/> */}

//     {/* <pointLight position={[150,2000,0]} intensity={2}/> */}

//     <pointLight position={[0,40,-200]} intensity={.2}/>
//     <pointLight position={[0,60,-200]} intensity={.2}/>
//     <pointLight position={[0,80,-200]} intensity={.2}/>
//     <pointLight position={[0,100,-200]} intensity={.2}/>
//     <pointLight position={[0,160,-200]} intensity={.2}/>
//     </>
//   )
// }
// const SkillIcon = ({src, alt, top, left, height})=>{
  
//   return (
//     <img src={src} alt={alt} style={{top: top, left: left}} height={height} className='SkillIcon'>
//     </img>
//   )
// }

const HtmlContent = ({domContent, children,groupPositionY, position, rotation, bgColor, scale, Model})=>{

  const [refItem, inView] = useInView({
    threshold: .3
  })
//If Object is in view Change Background colour
  useEffect(() => {
    inView && (document.body.style.backgroundColor = bgColor) 
  }, [inView])
  return(

    <Section  factor={1.5} offset={1}>
      <group position={[0,groupPositionY,0]}>
        <mesh  position={position} rotation={rotation} scale={scale}  >
        {GetModel(Model={Model})}
        </mesh>
        <Html portal={domContent} fullscreen>
          <div  ref={refItem}>{children}</div>
          </Html> 
      </group>
      {console.log({position})}
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
  const domContent = useRef();
  const scrollArea = useRef();
  var canPostionX = useRef()

  window.addEventListener('resize', function() {
    console.log(window.innerWidth + ', ' + window.innerHeight )
    canPostionX = 50;
    console.log(canPostionX);
  });


  const onScroll = (e) => (state.top.current = e.target.scrollTop)

  useEffect(() => void onScroll({target: scrollArea.current}), [])


  return (
    <>
  
    <Canvas colorManagment camera={{position: [0,0,120], fov:70, rotation: [0,0,0]}} > 
      <Suspense fallback={null}>
        <Environment files="winter_evening_1k.hdr"/>
        {/* <Environment files="comfy_cafe_1k.hdr"/> */}
          <HtmlContent  
          domContent={domContent} 
          groupPositionY={370} 
          position={[50,-30,0]} 
          rotation={[.3,0,0]}
          scale={3.5}
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
           
              <div className='centered'>
              <h1>About me</h1>
              <div className='Description'>
              <p>I am a full-stack developer who is hunting to conquer new and exciting programming / design challenges. I’m always looking to expand my toolset by learning new technologies And then implementing them in unique ways.</p>
              <p>Outside of programming, I enjoy spending my time creating and texturing 3D models with blender and substance painter and throwing discs into baskets in disc golf.</p>
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
          Model={'no'}>
              <div className='top'>
                <h1>Skills</h1>
                <h2>What I'm best at!</h2>
                <div className='SkillContainer'></div>
              </div>
          </HtmlContent>
          <HtmlContent 
          domContent={domContent} 
          groupPositionY={-270} 
          position={[0,-100,0]} 
          rotation={[1,0,0]}
          scale={3.5}
          bgColor={'#333333'}
          Model={'none'}>
              <Projects/>
          </HtmlContent>
    </Suspense>
    </Canvas>

    <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
      <div style={{position: 'sticky', top:0}}ref={domContent}></div>
      <div style={{width: `${100}%`, height: `${state.pages * 100}vh`}}></div>
    </div>
    </>
  );
}
// blue 571ec1
        {/* <mesh rotation={[-Math.PI /2,0,0]}>
          <planeBufferGeometry attach='geometry' args={[300,300]}/>
          <meshLambertMaterial attach='material' color={'#202020'}
          reflectivity={100}/>
        </mesh> */}

//camera={{position: [0,0,120], fov:70}}
export default App;
