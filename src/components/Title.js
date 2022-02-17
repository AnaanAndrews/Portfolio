import React from "react";



function Title() {

const MoveTo = () => {
    console.log(this.props.value)
}

return (
    <>
     {/* window[`scrollTo`]({top: 0, behavior:`smooth`}) */}
    <div className='leftcontainer'>
    <div className='title'>
    <h1> Hi, Im Anaan. </h1> 
    <h2 >I design &#38; build user interfaces</h2>
    </div>
    <div className="nav-links">
    <nav>
        <ul>
        <li>
        <input type="button" onClick={() => document.getElementById('about').scrollIntoView({behavior: "smooth", block: "center"})} value="About Me"/>
        </li>
        <li>
        <input type="button" onClick={() => document.getElementById('project').scrollIntoView({behavior: "smooth", block: "nearest"})} value="Projects"/>
        </li>
        <li>
        <input type="button" onClick={() => document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "center"})} value="Contact"/>
        </li>
        <li className="btn">
        <input type="button" onClick={MoveTo} value="Resume"/>
        </li>
        </ul>
    </nav>
    </div>
    </div>

    </>
	);
}export default Title 