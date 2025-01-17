export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    q: searchedQuery,
    key: '48288384-c73711b953ffb418f1a2cd50e',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
