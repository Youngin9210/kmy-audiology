/* eslint-disable import/no-anonymous-default-export */
export default {
	name: 'locations',
	title: 'Locations',
	type: 'document',
	fields: [
		{
			name: 'city',
			title: 'City',
			type: 'string',
			validation: (Rule) => Rule.required().error('Cannot be empty'),
		},
		{
			name: 'state',
			title: 'State',
			type: 'string',
			validation: (Rule) => Rule.required().error('Cannot be empty'),
		},
		{
			name: 'address',
			title: 'Street Address',
			type: 'string',
			validation: (Rule) => Rule.required().error('Cannot be empty'),
		},
		{
			name: 'zip',
			title: 'Zipcode',
			type: 'number',
			validation: (Rule) => Rule.required().error('Cannot be empty'),
		},

		{
			name: 'days',
			title: 'Days Open (example: M-F or Tue & Th)',
			type: 'string',
			validation: (Rule) => Rule.required().error('Cannot be empty'),
		},
		{
			name: 'hours',
			title: 'Business Hours (example: 9am-4pm or 9am-12pm | 1pm-4pm)',
			type: 'string',
			validation: (Rule) => Rule.required().error('Cannot be empty'),
		},
		{
			name: 'phone',
			title: 'Business Phone Number',
			type: 'string',
			validation: (Rule) => Rule.required().error('Cannot be empty'),
		},
		{
			name: 'fax',
			title: 'Business Fax',
			type: 'string',
		},
		{
			name: 'social',
			title: 'Social Media Link (example: https://facebook.com/beltone)',
			type: 'string',
			initialValue: 'https://',
			validation: (Rule) => Rule.required().error('Cannot be empty'),
		},
		{
			name: 'image',
			title: 'Office Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
	preview: {
		select: {
			title: 'city',
			media: 'image',
		},
	},
};
