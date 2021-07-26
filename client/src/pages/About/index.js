import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import React, { useEffect, useState } from 'react';
import sanityClient from '../../client';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const About = () => {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'author']{
      name,
      bio,
      'authorImage': image.asset->url
    }`
			)
			.then((data) => setAuthor(data[0]))
			.catch((err) => console.log(err));
	}, []);

	if (!author) return <div>Loading...</div>;
	return (
		<main className="container mx-auto text-center m-10 text-beltoneBlue-500">
			<h1 className="text-6xl">Meet Our Team!</h1>
			<section className="container mx-auto flex flex-wrap justify-center items-start my-8">
				<div className="lg:w-3/4 w-full lg:pr-3">
					<div className="bg-white bg-opacity-75 rounded-xl p-6">
						<img
							src={urlFor(author.authorImage).url()}
							alt="Dr. Young"
							className="rounded lg:w-5/6 mx-auto"
						/>
						<div className="text-lg flex flex-col justify-center container mx-auto">
							<h1 className="text-3xl font-bold m-4">{author.name}</h1>
							<div className="prose lg:prose-xl leading-relaxed">
								<BlockContent
									blocks={author.bio}
									projectId="t3iwym3s"
									dataset="production"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
