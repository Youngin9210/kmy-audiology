import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ navLinks, isOpen, toggle }) => {
	return (
		<div
			className={
				isOpen
					? `sticky top-16 z-50 grid grid-rows-4 text-center items-center bg-white beltoneBlue`
					: 'hidden'
			}
			onClick={toggle}
		>
			{navLinks.map((link) => (
				<Link className="p-3" to={link.path} key={link.name}>
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default Dropdown;
