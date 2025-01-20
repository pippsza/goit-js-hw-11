import {
  createGalleryCardTemplate,
  createWaitingCardTemplate,
} from './js/render-function';
import { fetchPhotosByQuery } from './js/pixaby-api';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();
  galleryEl.innerHTML = createWaitingCardTemplate();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === '') {
    iziToast.show({
      color: 'red',
      titleColor: 'red',
      title: 'Fields must be filled!',
      position: 'topRight',
    });
    galleryEl.innerHTML = '';

    searchFormEl.reset();
    return;
  }

  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      if (data.total === 0) {
        galleryEl.innerHTML = '';

        searchFormEl.reset();
        iziToast.show({
          color: 'red',
          titleColor: 'red',
          title:
            ' Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        SimpleLightbox.refresh();
        return;
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');

      galleryEl.innerHTML = galleryTemplate;
      new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })

    .catch(err => {
      iziToast.show({
        color: 'red',
        titleColor: 'red',
        title: `Нажаль сталася помилка!
        ${err}`,
        position: 'topRight',
      });
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
