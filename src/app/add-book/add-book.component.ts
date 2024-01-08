import { Component, inject, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BookData } from '../bookdata';
import { BooksService } from '../books.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ MatButtonModule,
    FormsModule,
    MatCheckboxModule ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  bookDataList : BookData[] = [];
  booksService: BooksService = inject(BooksService);

  constructor(public dialogRef: MatDialogRef<AddBookComponent>) {
    this.bookDataList = this.booksService.getAllBooks();
  }

  addBook(title: string, author: string, pub: string, genre: string, read: boolean) {
    if(title != '' && author != '' && pub != null && genre != '') {
      let listSize = this.bookDataList.length;
      
      let book: BookData = {
        id: listSize,
        title: title,
        author: author,
        published: new Date(pub),
        genre: genre,
        read: read,
      };

      this.bookDataList.push(book);
      this.dialogRef.close();
    }
    else {
      alert("Please fill all fields");
    }
  }
}
