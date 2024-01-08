import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { BookDataComponent } from '../book-data/book-data.component';
import { CommonModule } from '@angular/common';
import { BookData } from '../bookdata';
import { AddBookComponent } from '../add-book/add-book.component';
import { BooksService } from '../books.service';

interface BookF {
  valueFilter: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule, 
    BookDataComponent,
    CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedFilter = 'Title';
  bookDataList : BookData[] = [];
  booksService: BooksService = inject(BooksService);
  filteredBooksList: BookData[] = [];

  constructor(public dialogRef: MatDialog) {
    this.bookDataList = this.booksService.getAllBooks();
    this.filteredBooksList = this.bookDataList;
  }

  openDialog() {
    this.dialogRef.open(AddBookComponent);
  }

  booksf: BookF[] = [
    {valueFilter: 'Title'},
    {valueFilter: 'Author'},
    {valueFilter: 'Genre'},
    //{valueFilter: 'Publishing Year'},
    //{valueFilter: 'Read'},
    //{valueFilter: 'Unread'}
  ];

  filterBooks(text: string) {
    if (this.selectedFilter == this.booksf[0].valueFilter) {
      this.filteredBooksList = this.bookDataList.filter(
        bookData => bookData?.title.toLowerCase().includes(text.toLowerCase())
      );
    }
    else if (this.selectedFilter == this.booksf[1].valueFilter) {
      this.filteredBooksList = this.bookDataList.filter(
        bookData => bookData?.author.toLowerCase().includes(text.toLowerCase())
      );
    }
    else if (this.selectedFilter == this.booksf[2].valueFilter) {
      this.filteredBooksList = this.bookDataList.filter(
        bookData => bookData?.genre.toLowerCase().includes(text.toLowerCase())
      );
    }
    else if (this.selectedFilter == this.booksf[3].valueFilter) {
      this.filteredBooksList = this.bookDataList.filter(
        bookData => bookData?.genre.toLowerCase().includes(text.toLowerCase())
      );
    }
    else if (this.selectedFilter == this.booksf[4].valueFilter) {
      this.filteredBooksList = this.bookDataList.filter(
        bookData => bookData?.published
      );
    }
    else if (this.selectedFilter == this.booksf[5].valueFilter) {

    }
    else if (this.selectedFilter == this.booksf[6].valueFilter) {

    }
  }

}
