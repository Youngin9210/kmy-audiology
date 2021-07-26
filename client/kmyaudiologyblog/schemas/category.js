/* eslint-disable import/no-anonymous-default-export */
export default {
	name: 'category',
	title: 'Categories',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Category of Products',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
				auto: true,
			},
		},
		{
			name: 'body',
			title: 'Description of HA Category',
			type: 'blockContent',
		},
		{
			name: 'image',
			title: 'Category Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
