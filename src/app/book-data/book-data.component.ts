import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookData } from '../bookdata';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-data',
  standalone: true,
  imports: [MatCheckboxModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './book-data.component.html',
  styleUrl: './book-data.component.css'
})
export class BookDataComponent {
  @Input() bookData!: BookData;

  bookDataList : BookData[] = [];
  booksService: BooksService = inject(BooksService);

  constructor() {
    this.bookDataList = this.booksService.getAllBooks();
  }

  deleteBook(id : number) {
    const delBook = this.bookDataList.findIndex(obj => obj.id === id)
    this.bookDataList.splice(delBook, 1);
  }
}
