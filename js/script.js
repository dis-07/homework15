const API_URL = 'https://jsonplaceholder.typicode.com/albums';

const getAlboms = async () => {
    try {
        const responce = await fetch (API_URL);
        const data = await responce.json();
        return data;
    }   catch (err) {
        console.error(err);
    }
}

const getDataTitle = async () => {
    const title = await getAlboms();

    title.forEach(item => {
        let li = document.createElement('li');
        li.className = 'album_title';
        li.innerHTML = item.title;
        ul.append(li);
    });
}

let ul = document.createElement('ul');
    ul.className = 'albums';
    document.body.append(ul);

    getDataTitle();
