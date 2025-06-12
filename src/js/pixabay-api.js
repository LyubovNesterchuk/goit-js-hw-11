//робота з бекендом

// getImagesByQuery(query).Ця функція повинна приймати один параметр query(пошукове слово, яке є рядком),
// здійснювати HTTP - запит і повертати значення властивості data з отриманої відповіді.

// Список параметрів рядка запиту:
// key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.
// У відповіді буде об’єкт із декількома властивостями, в одному з яких(hits) буде масив об’єктів із зображеннями,
// що задовольнили критерії параметрів запиту.
// Обов’язково винеси функції для HTTP - запитів у файл pixabay - api.js у папці js. 
// Це хороша практика та можливість відпрацювати модульний підхід до розробки.
// Якщо бекенд повертає порожній масив, це означає, що нічого підходящого не було знайдено. 
// У такому випадку відображай повідомлення з текстом: Sorry, there are no images matching your search query. 
// Please try again!



import axios from 'axios';

const API_KEY = "50781688-4c5e14a62117c7affe0b16869";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(({ data }) => {
    if (!data.hits || data.hits.length === 0) {
        console.warn('Sorry, there are no images matching your search query:', query);
    }
    return data;
})
.catch(error => {
    console.error('Error message:', error.message);
});
}

getImagesByQuery('cat').then(data => {
  console.log('Знайдені зображення:', data.hits);
});