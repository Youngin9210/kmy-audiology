import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 't3iwym3s',
	dataset: 'production',
	apiVersion: '2021-07-28',
	useCdn: true,
});
