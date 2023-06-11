const USERS_API = 'https://jsonplaceholder.typicode.com/users';
const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';
const ALBUMS_API = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_API = 'https://jsonplaceholder.typicode.com/photos';

const listPost = document.querySelector('.posts');

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
}

async function getUsers() {
  return fetchData(USERS_API);
}

async function getPosts() {
  return fetchData(POSTS_API);
}

async function getAlbums() {
  return fetchData(ALBUMS_API);
}

async function getPhotos() {
  return fetchData(PHOTOS_API);
}

function createPostHTML(post, user, photo) {
  return `
  <div class="post__item">
        <div class="account__users d-flex align-items-center my-3">
            <img id="account__users" src="https://source.unsplash.com/200x200/?profile-avatar" alt="avatar" class="rounded-3 me-2">
            <h6 class="fw-bold my-auto" id="account__users">${user.name}<br><span class="timepost">3 hours</span></h6>
            <button class="btn-view">View <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div class="post__item-content">
            <p>${post.body}</p>
            <div class="post__item-album">
                ${
                    //Random 1-3 ảnh
                    Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => {
                        return `<img src="${photo.url}" alt="album" class="rounded-3">`
                    }
                    ).join('')
                }
            </div>
        </div>
        </div>
    </div>
`;
}


async function render() {
    try {
        const [posts, users, albums, photos] = await Promise.all([
            getPosts(),
            getUsers(),
            getAlbums(),
            getPhotos()
        ]);
    const htmls = posts.map(post => {
        const user = users.find(user => user.id === post.userId);
        const album = albums.find(album => album.userId === post.userId);
        const photo = photos.find(photo => photo.albumId === album.id);
        
        return createPostHTML(post, user, photo);
    });
    
    
    listPost.innerHTML + htmls.join('');
} catch (error) {
    console.log('Error rendering data:', error);
}
}

render();

