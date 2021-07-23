import imageUrlBuilder from '@sanity/image-url';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const SingleBlog = () => {
	const [blog, setBlog] = useState(null);
	const { slug } = useParams();
	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == '${slug}']{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      'name': author->name,
      'authorImage': author->image
    }`
			)
			.then((data) => setBlog(data[0]))
			.catch((err) => console.log(err));
	}, [slug]);

	if (!blog) return <div>Loading...</div>;
	return (
		<main className="container mx-auto text-center m-10">
			<div className="p-10">
				<section className="container mx-auto flex flex-wrap justify-center items-start my-16 beltoneBlue">
					<div className="lg:w-3/4 w-full lg:pr-3">
						<div className="bg-white bg-opacity-75 rounded-xl p-6">
							<img
								src={urlFor(blog.mainImage).url()}
								alt="Dr. Young"
								className="rounded lg:w-5/6 mx-auto"
							/>
							<div className="text-lg flex flex-col justify-center container mx-auto">
								<h1 className="text-3xl font-bold m-4">{blog.title}</h1>
								<div className="prose lg:prose-xl">
									{blog.body.length <= 1 ? (
										<p className="leading-relaxed text-left">
											{blog.body[0].children[0].text}
										</p>
									) : (
										blog.body.map((obj, index) => {
											return (
												<div className="pb-4" key={index}>
													<p className="leading-relaxed text-left">
														{obj.children[0].text}
													</p>
												</div>
											);
										})
									)}
								</div>
							</div>
							<div className="flex justify-center text-gray-800 mt-4">
								<img
									src={urlFor(blog.authorImage).url()}
									alt={blog.name}
									className="w-10 h-10 rounded-full"
								/>
								<p className="leading-relaxed flex justify-center items-center text-beltone-500 pl-2">
									{blog.name}
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default SingleBlog;
