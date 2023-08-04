const apiKey = '';

const searchButton = document.getElementById("");
const searchInput = document.getElementById("");
const resultsDiv = document.getElementById("");

async function fetchGoogleBooks(query) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
    
export { fetchGoogleBooks };
