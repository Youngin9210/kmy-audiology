/* eslint-disable import/no-anonymous-default-export */
export default {
	name: 'products',
	title: 'Products',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Product Name',
			type: 'string',
		},
		{
			name: 'images',
			title: 'Product Images',
			type: 'array',
			of: [
				{
					name: 'image',
					type: 'image',
					title: 'Image',
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: 'alt',
							type: 'string',
							title: 'Alternative text',
						},
					],
				},
			],
			options: {
				layout: 'grid',
			},
		},
		{
			name: 'display',
			type: 'string',
			title: 'Display as',
			description: 'How should we display these images?',
			options: {
				list: [
					{ title: 'In-line', value: 'inline' },
					{ title: 'Carousel', value: 'carousel' },
				],
				layout: 'radio', // <-- defaults to 'dropdown'
			},
		},
		{
			name: 'category',
			title: 'Category',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'category' }],
				},
			],
		},
		{
			name: 'body',
			title: 'Product Description',
			type: 'blockContent',
		},
	],
	preview: {
		select: {
			name: 'name',
			images: 'images',
			image: 'images.0',
			category: 'category',
		},
		prepare(selection) {
			const { images, image } = selection;

			return {
				title: `Gallery block of ${Object.keys(images).length} images`,
				subtitle: `Alt text: ${image.alt}`,
				media: image,
			};
		},
	},
};
