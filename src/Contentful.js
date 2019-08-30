import { createClient } from 'contentful';

export default createClient({
	space: process.env.REACT_APP_SPACE_ID,
	accessToken: process.env.REACT_APP_CONTENT_DELIVERY_TOKEN
});
