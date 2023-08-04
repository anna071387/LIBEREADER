const searchButton = document.getElementById("search-button")
const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

const apiKey = '';
const baseApiUrl = `https://www.googleapis.com/books/v1/volumes`;
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            const url = `${baseApiUrl}?q=${encodeURIComponent(query)}&key=${apiKey}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    displayBooks(data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    });
    
    function displayBooks(data) {
        resultsDiv.innerHTML = "";

        if (data.totalItems === 0) {
            resultsDiv.innerHTML = "No books found for the given query.";
            return;
        }
    
        const books = data.items;
    books.forEach((book) => {
        const bookInfo = book.volumeInfo;
        const title = bookInfo.title;
        const authors = bookInfo.authors ? bookInfo.authors.join(",") : "Unknown Author";
        const publishedDate = bookInfo.publishedDate || "Unknown Date";

        const bookElement = document.createElement("div");
        bookElement.innerHTML = `
        <h3>${title}</h3> 
        <p>${authors}</p> 
        <p>${publishedDate}</p>
        <hr>
        `;
        
        resultsDiv.appendChild(bookElement);
    });
}