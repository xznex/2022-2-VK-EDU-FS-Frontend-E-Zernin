export const sendRequest = (method, url, body = null) => {
	const headers = {
		'Content-Type': 'application/json',
	}

	return fetch(url, body ? {
		method: method,
		body: JSON.stringify(body),
		headers: headers,
	} : {method: method}).then(response => {
		if (response.status >= 400) {
			return response.json().then(result => {
				const error = new Error('Something went wrong!');
				error.data = result;
				throw error;
			})
		}
		return response.json();
	});
}