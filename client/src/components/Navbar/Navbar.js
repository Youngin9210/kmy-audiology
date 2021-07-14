import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Beltone_Logo_Web.png';
import styles from './Navbar.module.css';

export default function Navbar({ toggle, navLinks }) {
	return (
		<nav
			className="sticky top-0 z-50 flex justify-between items-center h-16 relative shadow-sm bg-white beltoneBlue"
			role="navigation"
		>
			<Link className={`pl-8 ${styles.logo}`} to="/">
				<img
					src={logo}
					alt="Beltone Logo"
					// className={styles.logo}
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
					<Link className="p-3" to={link.path} key={link.name}>
						{link.name}
					</Link>
				))}
			</div>
		</nav>
	);
}
