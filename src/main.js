// напиши всю логіку роботи додатка.Виклики нотифікацій iziToast, усі перевірки на довжину масиву
// в отриманій відповіді робимо саме в цьому файлі.
// Імпортуй в нього функції із файлів pixabay - api.js та render - functions.js та викликай їх у відповідний момент.


import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
      backgroundColor: '#f1c40f'
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (!data.hits.length) {
        iziToast.info({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: 'red'
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        message: `Something went wrong: ${error.message}`,
        position: 'topRight',
      });
      console.error('Error fetching images:', error);
    })
    .finally(() => {
      input.value = "";
  })
    
}







