import axios from 'axios';

const url = import.meta.env.VITE_URL_API;
const key = import.meta.env.VITE_KEY_API;

export async function getCoins() {
	const options = {
		headers: {
			'x-access-token': key,
		},
	};

	try {
		const response = await axios.get(url, options);

        if (response.status !== 200) {
            throw new Error('Failed to fetch data');
        }

		return response.data.data;
	} catch (error) {
		console.log(error);
	}
}
