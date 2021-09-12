export default function ImageApi(searchQuery, page) {
    const KEY = "22566981-b2c0de401259c0633e20b55b4";
    const BASE_URL = "https://pixabay.com/api/";
    const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    return fetch(url);
}