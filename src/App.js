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

// import ReactLogo from './Assets/Images/Skills/React.png'

import BootStrapLogo from './Assets/Images/Skills/BootStrap.svg'

import JavaScriptLogo from './Assets/Images/Skills/JavaScript.svg'

import CSharpLogo from './Assets/Images/Skills/CSharp.svg'

import NodeJsLogo from './Assets/Images/Skills/NodeJs.svg'

import MySQLLogo from './Assets/Images/Skills/MySQL.svg'

import ReactLogo from './Assets/Images/Skills/React.svg'

import GitHubLogo from './Assets/Images/Skills/GitHub.svg'

// import ASPLogo from './Assets/Images/Skills/ASP.svg' //FIX ASP LOGO

import InkScapeLogo from './Assets/Images/Skills/InkScape.svg'

import AffinityLogo from './Assets/Images/Skills/Affinity.svg'

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
          position={[0,-100,0]} 
          rotation={[1,0,0]}
          scale={3.5}
          bgColor={'#333333'}>
            
              <div className='top'>
              <h1>Skills</h1>
              <h2>What I'm best at!</h2>
              <div className='SkillArea'>
                <div className='Skill left'>
                  <h1>Front-End</h1>
                  <div className='LogoArea'>
                    <img src={JavaScriptLogo} className='icon' height={30}/>
                    <img src={JavaScriptLogo} className='icon' height={30}/>
                    <img src={JavaScriptLogo} className='icon' height={30}/>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum asperiores delectus consequatur corrupti cupiditate est laboriosam. Cupiditate accusamus iusto consectetur nobis earum nemo reprehenderit dolor animi modi, quidem laudantium. </p>
                </div>
                <div className='Skill Space'>
                  <h1>Back-End</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum asperiores delectus consequatur corrupti cupiditate est laboriosam. Cupiditate accusamus iusto consectetur nobis earum nemo reprehenderit dolor animi modi, quidem laudantium. </p>
                </div>
                <div className='Skill'>
                  <h1>Tools</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum asperiores delectus consequatur corrupti cupiditate est laboriosam. Cupiditate accusamus iusto consectetur nobis earum nemo reprehenderit dolor animi modi, quidem laudantium. </p>
                </div>
              </div>
              {/* {<SkillIcon top={-440} left={-600} alt={'React.Js Logo'} src={ReactLogo}></SkillIcon> */}
              <SkillIcon top={-440} left={600} alt={'BootStrap Icon'}  height={40} src={BootStrapLogo}></SkillIcon>
              <SkillIcon top={0} left={-280} alt={'Javascript Icon'} height={50} src={JavaScriptLogo}></SkillIcon>
              <SkillIcon top={50} left={0} alt={'C Sharp Icon'} height={50} src={CSharpLogo}></SkillIcon>
              <SkillIcon top={50} left={100} alt={'SQL Logo'} height={50} src={MySQLLogo}></SkillIcon>
              <SkillIcon top={-100} left={500} alt={'GitHub Logo'} height={50} src={GitHubLogo}></SkillIcon>
              {/* <img src={JavaScriptLogo}/> */}
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
