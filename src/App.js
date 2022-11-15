import "./App.scss";
import "./styles.scss";
import React, { Suspense, useRef, useEffect, useState } from "react";
//Components
import { Canvas } from "react-three-fiber";
import { Section } from "./components/section";
import { Html, useProgress, Environment } from "@react-three/drei";
import { a, useTransition } from "@react-spring/web";
//Html Elements

import Title from "./components/Title.js";
import Projects from "./components/projects.js";
import InfiniteCardScroll from "./components/InfiniteCardScroll";

//Page States
import state from "./components/state.js";

// Model;=
import PineCan from "./Assets/Models/LowQualPineCan.js";
import Basket from "./Assets/Models/DiscExtremlyLowQuality.js";

//Inersection Observer
import { useInView } from "react-intersection-observer";

//Resume

// TODO: create infit card scroll

// TODO: Add icons for relvent tools / languages on project cards

const HtmlContent = ({ domContent, children, groupPositionY, position, rotation, bgColor, scale, Model }) => {
	const model = useRef();
	const PostionX = (width, name) => {
		if (name === "can") {
			if (width >= 1536) {
				return 0;
			} else if (width >= 1200) {
				return 0;
			} else if (width >= 900) {
				return 0;
			} else if (width >= 600) {
				return 0;
			} else {
				return 0;
			}
		} else {
			if (width >= 1536) {
				return 0;
			} else if (width >= 1200) {
				return 0;
			} else if (width >= 900) {
				return 0;
			} else if (width >= 600) {
				return 0;
			} else {
				return 0;
			}
		}
	};

	// window.addEventListener("resize", function () {
	// 	if (model == null) return;
	// 	model.current.position.x = PostionX(window.innerWidth, model.current.name);
	// });

	const [refItem, inView] = useInView({
		threshold: 0.8,
	});
	//If Object is in view Change Background colour
	useEffect(() => {
		inView && (document.body.style.backgroundColor = bgColor);
	});

	return (
		<Section factor={1.5} offset={1}>
			<group position={[0, groupPositionY, 0]}>
				<mesh
					ref={model}
					name={Model}
					position={[PostionX(window.innerWidth, Model), position[1], position[2]]}
					rotation={rotation}
					scale={scale}>
					{GetModel((Model = { Model }))}
				</mesh>
				<Html portal={domContent} fullscreen>
					<div ref={refItem}>{children}</div>
				</Html>
			</group>
		</Section>
	);
};

const GetModel = ({ Model }) => {
	if (Model === "can") return <PineCan />;
	if (Model === "basket") return <Basket />;
	else return;
};

function Loader() {
	const { active, progress } = useProgress();
	const transition = useTransition(active, {
		from: { opacity: 1, progress: 0 },
		leave: { opacity: 0 },
		update: { progress },
	});
	return transition(
		({ progress, opacity }, active) =>
			active && (
				<a.div className="loading" style={{ opacity }}>
					<div className="loading-bar-container">
						<a.div className="loading-bar" style={{ width: progress }}></a.div>
					</div>
				</a.div>
			)
	);
}

function App() {
	document.title = "Pine-Apple Soda";
	//loading
	const [events] = useState();

	const scaleCan = () => {
		if (window.innerHeight >= 1440) return 5;
		if (window.innerHeight >= 864) return 4.4;
		if (window.innerHeight >= 675) return 4;
		if (window.innerHeight >= 506) return 4;
		if (window.innerHeight >= 338) return 4;
	};

	const scaleBasket = () => {
		if (window.innerHeight >= 1440) return 100;
		if (window.innerHeight >= 864) return 100;
		if (window.innerHeight >= 675) return 60;
		if (window.innerHeight >= 506) return 60;
		if (window.innerHeight >= 338) return 50;

		return 50;
	};

	//Scoll Section
	const domContent = useRef();
	const scrollArea = useRef();
	const onScroll = e => (state.top.current = e.target.scrollTop);

	useEffect(() => void onScroll({ target: scrollArea.current }), []);

	return (
		<>
			<Canvas colorManagment camera={{ position: [0, 0, 120], fov: 70, rotation: [0, 0, 0] }}>
				<Suspense fallback={null}>
					<Environment files="winter_evening_1k.hdr" />
					{/* <Environment files="comfy_cafe_1k.hdr"/> */}
					<HtmlContent
						domContent={domContent}
						groupPositionY={370}
						// position={[0,window.innerWidth >= 600? -25: -5,0]}
						// rotation={[.3,0,0]}
						// scale={window.innerWidth >= 600? 3.5: 4}
						position={[0, window.innerWidth >= 600 ? -40 : -5, 0]}
						rotation={[window.innerWidth >= 600 ? 0.1 : 0.22, 0, 0]}
						scale={scaleCan()}
						bgColor={"#f15946"}
						Model={"can"}>
						<Title />
					</HtmlContent>

					<HtmlContent
						domContent={domContent}
						groupPositionY={150}
						position={[0, window.innerWidth >= 600 ? 0 : 35, 0]}
						rotation={[0, 0, 0]}
						scale={scaleBasket()}
						// bgColor={'#002233'}
						bgColor={"#333333"}
						Model={"basket"}>
						<div className="section-wrapper mbottom pb5">
							<div big-height="true" className="section-container card">
								<div className="card-border"></div>
								<div className="card-content pa8">
									<h1 id="about" className="title-text primary-text mtext-center text-light  ma0">
										About me
									</h1>
									<div className="description-container">
										<p className="body-text white-text  ">

											I’m a full-stack web developer. I’ve always been someone
											who has both a <span className="primary-text">creative</span> and a <span className="primary-text">logical</span> side. Web development allows me to utilize these strengths in my
											design and code. Programming is my life's <span className="primary-text">passion</span> and I'm excited to see where it takes me.
										</p>
										{/* <p className="body-text white-text ">
										Outside of VS Code, I enjoy spending my time creating and texturing 3D models with Blender and substance painter and playing Discgolf
										</p> */}
									</div>
								</div>
							</div>
						</div>

						{/* <div className="section-wrapper mbottom pb5">
							<div className="section-container about-container">
								<div className="card-border"></div>
								<div>
									<h1 id="about" className="title-text primary-text mtext-center  ma0">
										About me
									</h1>
									<div className="description-container">
										<p className="body-text white-text mtext-center ">
											I am a full-stack developer who is hunting to conquer new and exciting programming / design challenges.
											I’m always looking to expand my toolset by learning new technologies and then implementing them in
											unique ways.
										</p>
									</div>
						
								</div>
							</div>
						</div> */}
					</HtmlContent>
					<HtmlContent
						domContent={domContent}
						groupPositionY={-50}
						position={[0, -130, 0]}
						rotation={[0, 0, 0]}
						scale={100}
						bgColor={"#333333"}
						Model={"none"}>
						<div className="center-wrap">
							<div className="center-items">
								<h1 className="title-text primary-text text-center text-light ma0">Relevant Skills</h1>
								<h2 className="subtitle-text white-text  text-center mt0">Front-end</h2>

								<InfiniteCardScroll type={"front"} direction={"pan-left"} delay={""} />
								<h2 className="subtitle-text white-text  text-center mt0">Back-end</h2>
								<InfiniteCardScroll type={"back"} direction={"pan-right"} delay={""} />
								<h2 className="subtitle-text white-text  text-center mt0">Tools</h2>
								<InfiniteCardScroll type={"tools"} direction={"pan-left"} delay={"animation-delay"} />
								{/*             
              <div className='top'>
              <h1 className='title-text primary-text'>Skills</h1>
              <h2 className='subtitle-text primary-text'>What I'm best at!</h2>
              <div id="project"  className='SkillContainer'></div>
            </div> */}
							</div>
						</div>
					</HtmlContent>
					<HtmlContent
						domContent={domContent}
						groupPositionY={-250}
						position={[0, -100, 0]}
						rotation={[1, 0, 0]}
						scale={3.5}
						bgColor={"#333333"}
						Model={"none"}>
						<Projects />
						<div className="contact">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
								<path
									fill="#f15946"
									d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,128C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
							</svg>
							<div className="contact-info">
								<div>
									<h2 className="subtitle-text white-text ma0">Like what you see?</h2>
									<h1 className="title-text white-text ma0" id="contact">
										Contact me!
									</h1>
								</div>
								<ul>
									<li>
										<h3 className="subtitle-text white-text ma0">Email</h3>
										<h2 className="subtitle-text white-text ma0">AnaanAndrews@gmail.com</h2>
									</li>
									<li>
										<h3 className="subtitle-text white-text ma0">Mobile</h3>
										<h2 className="subtitle-text white-text ma0">(289)-501-9132</h2>
									</li>
									<li className="btn">
										<a href="./AAndrewsResume.pdf" download="./AAndrewsResume.pdf">
											Download Resume
										</a>
									</li>
								</ul>
							</div>
						</div>
					</HtmlContent>
					{/* <HtmlContent 
          domContent={domContent} 
          groupPositionY={bottomPageOffest()} 
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
          </HtmlContent> */}
				</Suspense>
			</Canvas>
			<Loader />

			<div className="scrollArea" ref={scrollArea} onScroll={onScroll} {...events}>
				<div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
				<div
					style={{
						width: `${100}%`,
						height: `${
							state.pages *
							(window.innerWidth >= 1000 ? (window.innerHeight >= 801 ? 130 : 145) : window.innerHeight >= 800 ? 130 : 145)
						}vh`,
					}}></div>
			</div>
		</>
	);
}

export default App;
