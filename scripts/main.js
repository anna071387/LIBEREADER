import { fetchBooks } from "../utils/api";

async function searchBooks(query) {
    const data = await fetchBooks(query);

    if (data && data.items) {
        data.items.forEach((book) => {
            const title = book.volumeInfo.title;
            const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
            console.log('${title} by ${authors}');
        });
    } else {
        console.log('No books found.');
    }
    }


searchBooks('Harry Potter')
console.log(searchBooks)

async function handleClick(){
    await fetchBooks();
};

bookButton.addEventListener("click", handleClick);