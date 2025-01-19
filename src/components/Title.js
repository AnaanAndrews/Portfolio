import React from "react";



function Title() {

return (
    <>
     {/* window[`scrollTo`]({top: 0, behavior:`smooth`}) */}
    <div className='section-wrapper mbottom pb25'>
    <div className='section-container'>
    <h1 className='main-title-text white-text mtext-center ma0' > Hi, Im Anaan. </h1> 
    <h2 className='subtitle-text white-text mtext-center ma0'>I design &#38; build websites</h2>

    <div className="nav-links">
    <nav>
        <ul>
        <li className="nav-link">
        <input type="button" onClick={() => document.getElementById('about').scrollIntoView({behavior: "smooth", block: "start"})} value="About Me"/>
        </li>
        <li className="nav-link">
        <input type="button" onClick={() => document.getElementById('project').scrollIntoView({behavior: "smooth", block: "start"})} value="Projects"/>
        </li>
        <li className="nav-link">
        <input type="button" onClick={() => document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start"})} value="Contact"/>
        </li>
        <li className="nav-link">
            <a className="nav-link-btn" href="./Resume2024.pdf" download='Resume2024.pdf'>Resume</a>
        {/* <input type="button" onClick={MoveTo} value="Resume"/> */}
        </li>
        </ul>

    </nav>
    </div>
    </div>
    </div>
    </>
	);
}export default Title 