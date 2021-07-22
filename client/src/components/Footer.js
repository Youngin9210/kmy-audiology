import React from 'react';

const Footer = () => {
	return (
		<div className="flex flex-wrap lg:flex-nowrap justify-center items-center h-auto bg-white beltoneBlue">
			<p className="p-2">Copyright © 2021 KMY Audiology</p>
			<p className="p-2">All Rights Reserved</p>
			{/* TODO: Make designed by into a link to portfolio */}
			<p className="p-2">Designed By KMY Dev</p>
			{/* TODO: Add social media icon for facebook pages */}
		</div>
	);
};

export default Footer;
