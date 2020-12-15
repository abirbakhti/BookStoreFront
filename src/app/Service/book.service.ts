import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  urlBooks = 'http://127.0.0.1:82/books';
  book: any;

  constructor(private Http: HttpClient) { }

  getBooks() {
    return this.Http.get(this.urlBooks + '/list');
  }

  postBook(book: Book) {
    return this.Http.post(this.urlBooks + '/add', book);
  }

  updateBook(book: Book) {
    return this.Http.put(this.urlBooks + '/' + book['id'], book)
  }

  deleteBook(id) {
    return this.Http.delete(this.urlBooks + '/' + id)
  }
}