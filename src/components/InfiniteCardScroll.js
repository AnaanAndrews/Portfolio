import React from "react";

import { getSvgIconSet } from "../utils/GetSvgIcons";


import SkillCard from "./SkillCard";

const InfiniteCardScroll = ({ type, direction }) => {
	const icons = getSvgIconSet(type);

	return (
		<div className="infinite-scroll-wrapper">
			<div className="infinite-scroll-container">

				<div className={"infinite-scroll " + direction}>

                                        {icons.map(a=> <SkillCard icon={a.icon} title={a.title} extraPadding={a.ep} SRHidden={false} ></SkillCard>)}
                                      
                                        
                                        </div>
				<div className={"infinite-scroll " + direction}>
                                {icons.map(a=> <SkillCard icon={a.icon} title={a.title} extraPadding={a.ep} SRHidden={true}></SkillCard>)}
					{/* //{icons.map(a => SkillCard(a.icon, a.title, a.ep))} */}
				</div>
			</div>

			{/* <button type="button" className="btn-pan">

                <img src={left}/>
                
            </button> */}
			{/* <button type="button" className="btn-pan ">

<img className="rotate" src={left}/>

</button> */}
		</div>
	);
};
export default InfiniteCardScroll;
