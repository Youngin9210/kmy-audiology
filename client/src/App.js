import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
	// const [data, setData] = React.useState(null);

	// React.useEffect(() => {
	// 	fetch('/api')
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data.message));
	// }, []);

	return (
		<Router>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
