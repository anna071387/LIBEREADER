const newFormHandler = async (event) => {
  event.preventDefault();

  const author = document.querySelector('#book-author').value.trim();
  const title = document.querySelector('#book-title').value.trim();
  const book_rating = document.querySelector('#book-rating').value.trim();
  const description = document.querySelector('#book-desc').value.trim();

  if (author && title && book_rating && description) {
    const response = await fetch(`/api/books`, {
      method: 'POST',
      body: JSON.stringify({ author, title, book_rating, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create book review');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete book review');
    }
  }
};

document
  .querySelector('.new-book-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.book-list')
  .addEventListener('click', delButtonHandler);
