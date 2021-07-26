import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ navLinks, isOpen, toggle }) => {
	return (
		<div
			className={
				isOpen
					? `sticky top-16 z-50 grid grid-rows-4 text-center items-center bg-beltoneClearBlue-500 text-white`
					: 'hidden'
			}
			onClick={toggle}
		>
			{navLinks.map((link) => (
				<Link
					className={
						link.name === 'Schedule Appointment!'
							? 'bg-beltoneOrange-500 text-white p-3'
							: `p-3`
					}
					to={link.path}
					key={link.name}
				>
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default Dropdown;
