const API_URL = 'https://jsonplaceholder.typicode.com/albums';

const getAlboms = async () => {
    let ul = document.createElement('ul');
    ul.className = 'albums';
    document.body.append(ul);
    try {
        const responce = await fetch (API_URL);
        const data = await responce.json();
        data.forEach(item => {
            let li = document.createElement('li');
            li.className = 'album_title';
            li.innerHTML = item.title;
            ul.append(li);
        });
    }   catch (err) {
        console.error(err);
    }
}

getAlboms();