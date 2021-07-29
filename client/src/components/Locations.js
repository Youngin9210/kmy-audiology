import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import sanityClient from '../client';

const Locations = () => {
	const [locations, setLocations] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'locations']{
			city,
      state,
      address,
      zip,
      days,
      hours,
      phone,
      fax,
      social,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
		}`
			)
			.then((data) => setLocations(data))
			.catch((err) => console.log(err));
	}, []);
	console.log(locations);

	if (!locations) return <div>Loading...</div>;
	return (
		<main className="text-center">
			<h1 className="text-6xl">Visit Our Offices!</h1>
			<section className="container mx-auto flex flex-wrap justify-center items-start my-8">
				{locations.map((location, index) => {
					const {
						city,
						state,
						zip,
						address,
						days,
						hours,
						phone,
						fax,
						social,
						image,
					} = location;
					return (
						<div
							className=" container mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-8 p-6"
							key={index}
						>
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-4xl font-bold text-beltoneOrange-500">
									{city}
								</h1>
								<ul className="my-3 text-xl">
									<li>{`${address}`}</li>
									<li>{`${city}, ${state} ${zip}`}</li>
									<li>{`Phone: ${phone}`}</li>
									{fax && <li>{`Fax: ${fax}`}</li>}
									<li>{`Hours: ${days} ${hours}`}</li>
									<li>
										<SocialIcon
											url={social}
											className=""
											target="_blank"
											fgColor="#fff"
											style={{ height: '2em', width: '2em' }}
										/>
									</li>
								</ul>
							</div>
							<div className={`lg:${index % 2 !== 0 && 'order-first'}`}>
								<img
									src={image.asset.url}
									alt={image.alt}
									className="rounded"
								/>
							</div>
						</div>
					);
				})}
			</section>
		</main>
	);
};

export default Locations;
