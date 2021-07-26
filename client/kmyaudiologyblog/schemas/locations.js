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
		},
		{
			name: 'state',
			title: 'State',
			type: 'string',
		},
		{
			name: 'address',
			title: 'Street Address',
			type: 'string',
		},
		{
			name: 'zip',
			title: 'Zipcode',
			type: 'number',
		},

		{
			name: 'days',
			title: 'Days Open (example: M-F or Tue & Th)',
			type: 'string',
		},
		{
			name: 'hours',
			title: 'Business Hours (example: 9am-4pm or 9am-12pm | 1pm-4pm)',
			type: 'string',
		},
		{
			name: 'phone',
			title: 'Business Phone Number',
			type: 'string',
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
};
