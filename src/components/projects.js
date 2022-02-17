import React from "react";
import Carousel from './carousels/Carousel';
import {ImageData} from './carousels/ImageData'
import Meta from '../Assets/Images/Portfolio/Meta.png'

export default function Projects() {
return (
    <div  className='top'>
    <h1 >Projects</h1>
    <h2 >Cool things I've Created!</h2>
    <div className="Project">
        <div className="Title">
            <h3 >In Development</h3>
            <h2>Grow Community Project</h2>   
            <div className="Description">
            <p>The GROW community project is an ASP.net MVC web application in development for the GROW community food literacy center. I am currently working on its development alongside four other team members.</p>
            <p> The objective of the application is to create a member management system and a point of sales system to replace their current pen and paper systems. My scope for the project is the implementation of the google maps API for place auto-completion and map reports of their members. </p>       
            </div>                                   
        </div>
            <div className="ImageDisplay">
                {/* <img src={GrowMap}/> */}
                <Carousel images={ImageData('grow')} />
            </div>
        </div>
    <div className="Project">
        <div className="Title">
            <h3>Meta</h3>
            <h2>This Portfolio</h2>   
            <div className="Description">
            <p>This portfolio was created with React three fiber and three.js. The project's objective was to create a visually appealing website and serve as an excuse to display some of my models.</p>
            <p>During development, the main difficulties were the lighting and HTML scrolling behaviours in a canvas element. How I overcame, these problems can be seen in the source code below. Ultimately, creating this website was a fun challenge and a good learning experience.</p>       
            </div>                          
        </div>
        <div className="ImageDisplay">
            <img src={Meta} alt='Screen capture of this portfolio page, repeated'/>       
        </div>
    </div>
    <div className="Project">
        <div className="Title">
        <h3>Completed!</h3>
            <h2>Canada Summer Games Demo</h2>   
            <div className="Description">
            <p>The Canada Summer Games demo project is an ASP.net MVC web application created as an opertunity to learn. The project's objective was to develop an application to manage multiple models with user autherentcation and roles and responsibilities.</p>
            <p>Key features of the project include Image and Document upload and download, Auditing / Concurrency handling. User Roles and restrictions. Summary / Master-detail pages. Excel download and upload  </p>       
            </div>                                  
        </div>
    <div className="ImageDisplay">
    <Carousel images={ImageData('cg')} />
</div>
    </div>
  </div>
)};