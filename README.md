# 📚 Books Directory – Node.js CRUD API

This project is a simple **CRUD API** built with **Node.js**, **Express**, and **MongoDB** to manage a book directory. It includes endpoints to add, fetch, update, and delete books using RESTful principles.

## 🚀 Features

- Add a new book with `title`, `author`, `genre`, and `publishedYear`
- Get a list of all books
- Update book details
- Delete a book by title

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **Postman** for API testing

## 📮 API Endpoints

| Method | Route                          | Description       |
|--------|--------------------------------|-------------------|
| POST   | `/api/book/addBook`            | Add a new book    |
| GET    | `/api/book/getBook`            | Get all books     |
| PUT    | `/api/book/updateBook`         | Update book by ID |
| DELETE | `/api/book/deleteBook`         | Delete book by title |

## 🔄 Sample Request Payloads

### Add Book
```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-Help",
  "publishedYear": "2018"
}
```

### Update Book
```json
{
  "_id": "your-book-id-here",
  "title": "New Title",
  "author": "New Author",
  "genre": "New Genre",
  "publishedYear": "2023"
}
```

### Delete Book
```json
{
  "title": "Book Title To Delete"
}
```


