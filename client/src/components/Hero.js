import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

const Hero = () => {
	const [hero, setHero] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'header']{
			message,
			image{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
			)
			.then((data) => setHero(data[0]))
			.catch((err) => console.log(err));
	}, []);
	
	if (!hero) return <div>Loading...</div>;
	return (
		<>
			<img
				src={hero.image.asset.url}
				alt={hero.image.alt}
				className="absolute object-cover h-full w-full"
			/>
			<div className="relative flex justify-center items-center min-h-screen pt-12 lg:pt-24 pl-8 pr-8">
				<div className="text-center bg-gray-100 bg-opacity-75 rounded p-10">
					<h1 className="text-6xl font-bold leading-none lg:leading-snug text-beltoneBlue-500">
						{hero.message}
					</h1>
				</div>
			</div>
		</>
	);
};

export default Hero;
