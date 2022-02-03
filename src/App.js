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

//Inersection Observer
import {useInView} from 'react-intersection-observer';

//Lazy Load
import LazyLoad from 'react-lazyload';



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

const HtmlContent = ({domContent, children,groupPositionY, position, rotation, bgColor, scale})=>{

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
          <PineCan/>
        </mesh>
        <Html portal={domContent} fullscreen>
          <div  ref={refItem}>{children}</div>
          </Html> 
      </group>
    </Section>
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
          <HtmlContent  
          domContent={domContent} 
          groupPositionY={250} 
          position={[50,-30,0]} 
          rotation={[.3,0,0]}
          scale={3.5}
          bgColor={'#f15946'}>
            <Title/>
          </HtmlContent>
          <HtmlContent 
          domContent={domContent} 
          groupPositionY={0} 
          position={[0,-30,0]} 
          rotation={[1,0,0]}
          scale={3.5}
          bgColor={'#002233'}>    
            <div className='container'>
              <div className='centered'>
              <h1 className='title'>About me</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci numquam ea officiis amet sequi veniam, dolore, corrupti vel accusamus pariatur eligendi molestiae ab voluptas temporibus nulla nobis soluta veritatis.</p>
            </div>
                  </div>
          </HtmlContent>
          <HtmlContent 
          domContent={domContent} 
          groupPositionY={-250} 
          position={[0,-30,0]} 
          rotation={[1,0,0]}
          scale={3.5}
          bgColor={'#333333'}>
              <div className='containe'>
              <div className='top'>
              <h1 className='title'>Skills</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci numquam ea officiis amet sequi veniam, dolore, corrupti vel accusamus pariatur eligendi molestiae ab voluptas temporibus nulla nobis soluta veritatis.</p>
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
