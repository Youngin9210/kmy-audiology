/* eslint-disable import/no-anonymous-default-export */
export default {
	name: 'header',
	title: 'Homepage Header',
	type: 'document',
	fields: [
		{
			name: 'message',
			title: 'Main Message',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
	preview: {
		select: {
			title: 'message',
			media: 'image',
		},
	},
};
