import { Injectable } from '@angular/core';
import { BookData } from './bookdata';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAllBooks(): BookData[] {
    return this.bookDataList;
  }

  getBookByTitle(id: number) : BookData | undefined {
    return this.bookDataList.find(bookData => bookData.id === id);
  }

  bookDataList: BookData[] = [
    {
      id: 0,
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      published: new Date(1997, 0),
      read: true
    },
    {
      id: 1,
      title: "Harry Potter and the Chamber of Secrets",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      published: new Date(1998, 0),
      read: true
    },
    {
      id: 2,
      title: "Harry Potter and the Prisoner of Azkaban",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      published: new Date(1999, 0),
      read: true
    },
    {
      id: 3,
      title: "Harry Potter and the Goblet of Fire",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      published: new Date(2000, 0),
      read: true
    },
    {
      id: 4,
      title: "Harry Potter and the Order of the Phoenix",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      published: new Date(2003, 0),
      read: false
    },
    {
      id: 5,
      title: "Harry Potter and the Half-Blood Prince",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      published: new Date(2005, 0),
      read: false
    },
    {
      id: 6,
      title: "Harry Potter and the Deathly Hallows",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      published: new Date(2007, 0),
      read: false
    }
  ]
}
