import React from "react";

import Project from "./project";
export default function Projects() {
	// const projectState = 'In Development'
	// const title = 'Grow Community Project'
	// const p1 =  'The GROW community project is an ASP.net MVC web application in development for the GROW community food literacy center. I am currently working on its development alongside four other team members.';
	// const p2 = 'The objective of the application is to create a member management system and a point of sales system to replace their current pen and paper systems. My scope for the project is the implementation of the google maps API for place auto-completion and map reports of their members.';

	return (
		<div className="project-wrapper" >
			<h1 className="title-text text-light primary-text ma0 tma0"  >Projects</h1>
			<h2 className="subtitle-text white-text text-bold mt0 mb5 ">Cool things I've Created!</h2>

			<Project
				projectState={"Completed"}
				title={"Rosa Flora Redesign"}
				link={"https://www.rosaflora.com/"}
				imgData={"rfl"}
				live={true}
				prop={
					<>
						<p className="body-text white-text mt0">

							For this project, I completely redesigned and modernized the Rosaflora.com website, transforming it from an outdated, underperforming platform into a sleek, high-performance digital experience. My approach involved a comprehensive overhaul of both the design and technical architecture, ensuring the site was not only visually appealing but also optimized for speed and functionality.


						</p>

						<p className="body-text white-text ">
							Key accomplishments include:
						</p>
						<ul className="body-text white-text ">
							<li>
								Responsive Design: Ensured full mobile compatibility and a seamless experience across devices.
							</li>
							<li>
								Modernized Tech Stack: Updated the coding structure to utilize current best practices, enhancing scalability and performance.

							</li>
							<li>
								Performance Optimization: Improved load times and user interaction through strategic asset management and code optimizations.

							</li>
							<li>
								Collaborative Process: Worked closely with the Rosaflora team to understand their vision, incorporating feedback to ensure the site accurately reflected their brand and goals.

							</li>
							<li>
								User-Centric Design: Followed the latest design trends to create an intuitive, aesthetically pleasing user interface that aligns with industry standards.

							</li>
						</ul>
						<p className="body-text white-text ">
						This redesign not only improved the site's visual appeal but also contributed to a better user experience, helping the brand connect with a broader audience in a more engaging and efficient way.

						</p>
					</>
				}></Project>

			<Project
				projectState={"In Development"}
				title={"Quant's Query"}
				link={"https://quantsquery.com/"}
				imgData={"qq"}
				live={true}
				prop={
					<>
						<p className="body-text white-text mt0">
							Quant’s Query is a soon-to-be stock analysis program I’m working on alongside my friend{" "}
							<a className="body-text white-text" target="_blank" rel="noreferrer" href={"https://www.markjps.com/"}>
								Mark
							</a>
							. The website is built using Next.js with typescript and is currently hosted using AWS.
						</p>
						<p className="body-text white-text">
							The current features of the project are a dynamic layout, sign-in/up modals, light / dark mode and a apex
							candle stick chart placeholder. There's still so much work to do, but I am excited to see this project grow.
						</p>
					</>
				}></Project>

			<Project
				projectState={"Meta"}
				title={"This Portfolio"}
				link={"https://github.com/AnaanAndrews/Portfolio"}
				imgData={"port"}

				prop={
					<>
						<p className="body-text white-text mt0">
							This portfolio was created with React and three.js. For the design, I wanted to challenge myself to push how I use the available screen space;
							I wanted everything to be BIG.
						</p>
						<p className="body-text white-text">
							During development, the main difficulties I faced were the HTML portal scrolling behaviours in the canvas and
							the model lighting.
						</p>

						<p className="body-text white-text">
							I feel as if I’ve only scratched the surface of three.js
							and what is capable of. I look forward to continuing to create exciting things with React and three.js
						</p>
					</>
				}></Project>

			<Project
				projectState={"Completed"}
				title={"Grow Community Project"}
				link={"https://github.com/samarthharjai/PinewoodGrow/tree/PreSamarth2"}
				imgData={"grow"}
				prop={
					<>
						<p className="body-text white-text mt0">
							While at Niagara College I had the privilege to work directly within our community helping design and build a
							web application for GROW Community Foood Literacy Center.
						</p>
						<p className="body-text white-text">
							The objective of the application is to create a member management system and a point of sales system to replace
							their current pen and paper systems. The app was built utilizing ASP.Net core, bootstrap, google maps, SQLite
							and a bit of jquery.
						</p>

						{/* <p className="body-text white-text">
							My favourite feature of this project is the map report, which provides a visual breakdown of where their
							clients and their travel times to GROW and their nearest grocery store.
						</p> */}
					</>
				}></Project>

		</div>
	);
}
