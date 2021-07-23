import imageUrlBuilder from '@sanity/image-url';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../client';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const Blog = () => {
	const [blogData, setBlog] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'post']{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      'name': author->name,
      'authorImage': author->image,
			body
    }`
			)
			.then((data) => setBlog(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main className="min-h-screen p-12">
			<section className="container mx-auto text-center">
				<h1 className="text-6xl">Blog</h1>
				<div className="flex flex-wrap items-start my-16 gap-8">
					{blogData &&
						blogData.map((blog, index) => {
							console.log('blog body:', blog.body);
							return (
								<article key={index} className="lg:w-1/4 w-full lg:px-3">
									<Link
										to={`/blog/${blog.slug.current}`}
										key={blog.slug.current}
									>
										<div className="bg-gray-200 rounded-xl relative text-white">
											<div className="absolute top-0 bottom-0 left-0 right-0 h-full z-10 bg-gradient-to-b from-transparent to-beltone-900 rounded-b-xl"></div>
											<img
												src={blog.mainImage.asset.url}
												alt={blog.mainImage.alt}
												className="object-cover h-96 w-full rounded-xl"
											/>
											<div className="p-6 absolute bottom-0 left-0 z-20">
												<h2 className="text-2xl text-left font-bold mb-2">
													{blog.title}
												</h2>
												<div className="flex leading-relaxed">
													<img
														src={urlFor(blog.authorImage).url()}
														alt={blog.name}
														className="w-10 h-10 rounded-full"
													/>
													<p className="flex items-center pl-2 text-lg">
														{blog.name}
													</p>
												</div>
											</div>
										</div>
									</Link>
								</article>
							);
						})}
				</div>
			</section>
		</main>
	);
};

export default Blog;
