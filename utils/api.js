const booksURL = "https://www.googleapis.com/auth/books";
const compareButton = document.querySelector("#compare");

async function fetchBooks(query) {
    try {
        const url = 'https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${GOOGLE_BOOKS_API_KEY}';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response failed.');
        }
        const data = await response.json();
        return data;
      }  catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    }

export {fetchBooks}