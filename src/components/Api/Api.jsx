import axios from 'axios';

const key = '28287622-9fc0cf20b0788b19abfc6bde1';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: key,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

const searchImages = (page = 1, q) => {
  return instance.get('/', {
    params: {
      page,
      q,
    },
  });
};

export const Api = {
  searchImages,
};
