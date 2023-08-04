import { fetchGoogleBooks } from '../utils/api.js';

async function searchBooks(query) {
  const data = await fetchGoogleBooks(query);

  if (data && data.items) {
    data.items.forEach((book) => {
      const title = book.volumeInfo.title;
      const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
      console.log(`${title} by ${authors}`);
    });
  } else {
    console.log('No books found.');
  }
};


// Usage example:
searchBooks('Harry Potter');
