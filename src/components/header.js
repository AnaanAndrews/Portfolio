import React from "react";

export default function Header() {
return (
<header>
	<div className="header-inner">
		<nav>
			<ul>
			<li>
			<a href="/">About me</a>
			</li>
			<li>
			<a href="/">Projects</a>
			</li>
			<li>
			<a href="/">Resume</a>
			</li>
			<li className="btn">
			<a href="/">Contact</a>
			</li>
			</ul>
			</nav>
    </div>
</header>
	);
}