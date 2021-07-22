import React from 'react';
import hero from '../assets/lifestyle-5.jpeg';

const Hero = () => {
	return (
		<>
			<img
				src={hero}
				alt="Lifestyle"
				className="absolute object-cover h-full w-full"
			/>
			<div className="relative flex justify-center items-center min-h-screen pt-12 lg:pt-24 pl-8 pr-8">
				<div className="text-center bg-gray-100 bg-opacity-50 rounded p-10">
					<h1 className="text-8xl font-bold leading-none lg:leading-snug beltoneBlue">
						Beltone
					</h1>
					<h1 className="text-6xl font-bold leading-none lg:leading-snug beltoneBlue">
						Catchy/Beltone phrase here...
					</h1>
				</div>
			</div>
		</>
	);
};

export default Hero;
