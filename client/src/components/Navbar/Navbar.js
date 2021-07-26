import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-negative-white.png';

const Navbar = ({ toggle, navLinks }) => {
	return (
		<nav
			className="sticky xl:px-32 lg:px-16 top-0 z-50 flex justify-between items-center h-16 relative shadow-sm bg-beltoneBlue-500 text-white"
			role="navigation"
		>
			<Link className={`ml-8 lg:w-1/6 w-1/5 hover:cursor-pointer`} to="/">
				<img
					src={logo}
					alt="Beltone Logo"
					className=""
					// onClick={(e) => handleLogoClick(e)}
				/>
			</Link>
			<div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>
			<div className="pr-8 md:block hidden">
				{navLinks.map((link) => (
					<Link
						className={
							link.name === 'Schedule Appointment!'
								? 'bg-beltoneOrange-500 text-white rounded p-3 mx-1'
								: `p-3 hover:bg-white rounded hover:text-beltoneBlue-500 mx-1`
						}
						to={link.path}
						key={link.name}
					>
						{link.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
