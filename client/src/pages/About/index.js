import React from 'react';
import Locations from '../../components/Locations';
import Team from '../../components/Team';

const About = () => {
	return (
		<main className="container mx-auto m-10 text-beltoneBlue-500">
			<Team />
			<Locations />
		</main>
	);
};

export default About;
