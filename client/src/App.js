import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer';
import Dropdown from './components/Navbar/Dropdown';
import Navbar from './components/Navbar/Navbar';
import SingleBlog from './components/SingleBlog';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
	const [navLinks] = useState([
		{ name: 'Home', path: '/' },
		{ name: 'About  Us', path: '/about' },
		{ name: 'Products', path: '/products' },
		{ name: 'Blog', path: '/blog' },
		{ name: 'Contact Us', path: '/contact' },
	]);

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Router>
			<div className="h-full">
				<Navbar toggle={toggle} navLinks={navLinks} />
				<Dropdown isOpen={isOpen} toggle={toggle} navLinks={navLinks} />
				<div className="text-white h-screen">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/products" component={Products} />
						<Route exact path="/blog" component={Blog} />
						<Route exact path="/blog/:slug" component={SingleBlog} />
						<Route exact path="/contact" component={Contact} />
					</Switch>
				</div>
				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default App;
