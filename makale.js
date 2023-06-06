function MakaleEkle(baslik, icerik) {
	const makale = {
		title: baslik,
		content: icerik,
	};

	return fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'post',
		data: JSON.stringify(makale),
	}).then((response) => {
		console.log('response', response);
		return response;
	});
}

function MakaleleriGetir() {
	return fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'get',
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		});
}
