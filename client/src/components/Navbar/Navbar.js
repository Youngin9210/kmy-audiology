import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/log-negative-white.png';
import styles from './Navbar.module.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: 'rgb(0, 86, 148)',
	},
	toolBar: {
		// display: "flex",
		// justifyContent: "space-between",
	},
	menuButton: {
		display: 'none',
		marginRight: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
	},
	logo: {
		'&:hover': {
			cursor: 'pointer',
		},
		width: '15%',
		marginRight: 'auto',
		marginLeft: theme.spacing(2),
		margin: '1.25em 0',
		[theme.breakpoints.down('sm')]: {
			width: '25%',
		},
		[theme.breakpoints.down('xs')]: {
			width: '40%',
		},
	},
}));

export default function Navbar() {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();
	const [navLinks, setNavLinks] = useState([{}]);

	const handleLogoClick = (e) => {
		e.preventDefault();
		window.location.pathname = '/';
		console.log(window.location.pathname);
	};

	return (
		<nav className={`navbar navbar-expand-lg  ${styles.navBg}`}>
			<div className="container-fluid">
				<img
					alt="logo"
					className={styles.logo}
					src={logo}
					onClick={(e) => handleLogoClick(e)}
				/>
				<button className="navbar-toggler">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`collapse navbar-collapse ${styles.navItemList}`}
					id="beltoneNav"
				>
					<ul className={`navbar-nav mb-2 mb-lg-0`}>
						<li className="nav-item">
							<Link to="/about" className={`nav-link ${styles.navLinks}`}>
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products" className={`nav-link ${styles.navLinks}`}>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className={`nav-link ${styles.navLinks}`}>
								{' '}
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className={`nav-link ${styles.navLinks}`}>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
