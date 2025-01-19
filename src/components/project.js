import React, { useEffect, useState } from "react";

import Carousel from "./carousels/Carousel";
import { ImageData } from "./carousels/ImageData";

import { getSvgIconSet } from "../utils/GetSvgIcons";


const Project = ({ projectState, title, link, imgData, live, prop }) => {
	const icons = getSvgIconSet(imgData);

	const [width, setWidth] = useState(window.innerWidth);

	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	return (
		<div className="project-container2">
			<div className="project-words">
				<div className="project-title-wrapper">
					<div className="project-title">
						<h3 className="ma0 body-text primary-text text-bold  ">{projectState}</h3>
						<h2  className="mt0  subtitle-text  white-text text-light ma0 pb-2 ">{title}</h2>
					</div>
					<div className="project-title-icons">
						{icons.map(a => (
							<img src={a.icon} className={a.ep} alt={a.alt}></img>
						))}
					</div>
				</div>

				{width <= 1450 ? (
					<div className="ImageDisplay2">
						<Carousel images={ImageData(imgData)} />
					</div>
				) : (
					<hr className="divider" />
				)}

				<div className="project-description2">{prop}</div>
				<div className="project-button-container">
					{!live ? (
						<button
							className="custom-button"
							value="View on Github"
							onClick={() =>
								setTimeout(() => {
									window.open(link);
								}, 500)
							}>
							<svg fill="#f15946" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="m12 2a10 10 0 0 0 -10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23 0-.86 0-1.69-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0 -10-10z" />
							</svg>

							<p>Github</p>
						</button>
					) : (
						<button
							className="custom-button"
							value="View on Github"
							onClick={() =>
								setTimeout(() => {
									window.open(link);
								}, 500)
							}>
							<svg viewBox="0 0 256 256" fill="#f15946" xmlns="http://www.w3.org/2000/svg">
								<path d="m71.68213 97.21875-36.9375 30.78125 36.9375 30.78125a12 12 0 0 1 -15.36426 18.4375l-48-40a12.00005 12.00005 0 0 1 0-18.4375l48-40a12 12 0 1 1 15.36426 18.4375zm176 21.5625-48-40a12 12 0 1 0 -15.36426 18.4375l36.9375 30.78125-36.9375 30.78125a12 12 0 0 0 15.36426 18.4375l48-40a12.00005 12.00005 0 0 0 0-18.4375zm-83.58106-90.05859a12.0021 12.0021 0 0 0 -15.37841 7.17675l-64 176a11.99972 11.99972 0 1 0 22.55468 8.20118l64-176a11.99923 11.99923 0 0 0 -7.17627-15.37793z" />
							</svg>
							<p>Live Server</p>
						</button>
					)}
				</div>
			</div>
			{width >= 1450 ? (
				<div className="ImageDisplay2">
					<Carousel images={ImageData(imgData)} />
				</div>
			) : (
				<></>
			)}
		</div>
	);
};
export default Project;

