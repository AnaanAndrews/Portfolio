import './App.scss';
import React, { Suspense,useRef, useEffect} from 'react';
//Components
import { Canvas } from 'react-three-fiber';
import { Section } from './components/section';
import { Html, Environment} from '@react-three/drei';
//Html Elements
import Title from './components/Title.js';

//Page States
import state from './components/state.js';

// Model;=
import PineCan from './components/Pineapplesoda.js' ;

import Basket from './components/DiscLowQual'

//Inersection Observer
import {useInView} from 'react-intersection-observer';


//Import Circles

import Circle from './Assets/svg/Circle.svg'

const Lights = () => {
  return(
    <>
    {/* <directionalLight position={[-120,140,110]} intensity={1}/> */}
    {/* <pointLight position={[150,50,200]} intensity={.1}/> */}

    {/* <pointLight position={[150,2000,0]} intensity={2}/> */}

    <pointLight position={[0,40,-200]} intensity={.2}/>
    <pointLight position={[0,60,-200]} intensity={.2}/>
    <pointLight position={[0,80,-200]} intensity={.2}/>
    <pointLight position={[0,100,-200]} intensity={.2}/>
    <pointLight position={[0,160,-200]} intensity={.2}/>
    </>
  )
}

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
        <mesh  position={position} rotation={rotation} scale={scale}>
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
if (Model == 'can')
  return <PineCan/>
if (Model == 'basket')
return <Basket/>
else return

}

const SkillIcon = ({src, alt, top, left, height})=>{
  
  return (
    <img src={src} alt={alt} style={{top: top, left: left}} height={height} className='SkillIcon'>
    </img>
  )
}

function App() {
  const domContent = useRef();
  const scrollArea = useRef();

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
            <div className='container'>
              <div className='centered'>
              <h1 className='title'>About me</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci numquam ea officiis amet sequi veniam, dolore, corrupti vel accusamus pariatur eligendi molestiae ab voluptas temporibus nulla nobis soluta veritatis.</p>
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
          Model={''}>
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
          Model={''}>
              <div className='top'>
                <h1>Projects</h1>
                <h2>Cool things I've Created!</h2>
                <div className="Project">
                  <div className="Description">
                  <h3>On Going</h3>
                    <h2>Grow Community Project</h2>   
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aut minus obcaecati ipsam quisquam, fugiat tempore ducimus commodi a voluptate officia magni, cumque reprehenderit! Amet eaque aspernatur aliquam dolorem et?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aut minus obcaecati ipsam quisquam, fugiat tempore ducimus commodi a voluptate officia magni, cumque reprehenderit! Amet eaque aspernatur aliquam dolorem et?</p>                                 
                  </div>
                  <div className="ImageDisplay">
                      <div className="test">

                      </div>
                  </div>
                </div>
                <div className="Project">
                  <div className="Description">
                  <h3>On Going</h3>
                    <h2>Grow Community Project</h2>   
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aut minus obcaecati ipsam quisquam, fugiat tempore ducimus commodi a voluptate officia magni, cumque reprehenderit! Amet eaque aspernatur aliquam dolorem et?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aut minus obcaecati ipsam quisquam, fugiat tempore ducimus commodi a voluptate officia magni, cumque reprehenderit! Amet eaque aspernatur aliquam dolorem et?</p>                                 
                  </div>
                  <div className="ImageDisplay">
                      <div className="test">

                      </div>
                  </div>
                </div>
                <div className="Project">
                  <div className="Description">
                  <h3>On Going</h3>
                    <h2>Grow Community Project</h2>   
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aut minus obcaecati ipsam quisquam, fugiat tempore ducimus commodi a voluptate officia magni, cumque reprehenderit! Amet eaque aspernatur aliquam dolorem et?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aut minus obcaecati ipsam quisquam, fugiat tempore ducimus commodi a voluptate officia magni, cumque reprehenderit! Amet eaque aspernatur aliquam dolorem et?</p>                                 
                  </div>
                  <div className="ImageDisplay">
                      <div className="test">

                      </div>
                  </div>
                </div>
              </div>
          </HtmlContent>
    </Suspense>
    </Canvas>

    <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
      <div style={{position: 'sticky', top:0}}ref={domContent}></div>
      <div style={{height: `${state.pages * 100}vh`}}></div>
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
