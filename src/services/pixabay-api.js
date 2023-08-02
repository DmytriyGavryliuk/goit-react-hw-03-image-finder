import axios from 'axios';

const API_KEY = '34446283-3d40fefb592ada7459bfc2d6a';

const pixabayAPI = axios.create({
  baseURL: 'https://pixabay.com',
});

export const fetchImages = async ({ query, page, perPage }) => {
  return pixabayAPI.get('/api/', {
    params: {
      key: API_KEY,
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  });
};
