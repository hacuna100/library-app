import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookData } from '../bookdata';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-book-data',
  standalone: true,
  imports: [MatCheckboxModule, MatInputModule, FormsModule ],
  templateUrl: './book-data.component.html',
  styleUrl: './book-data.component.css'
})
export class BookDataComponent {
  @Input() bookData!: BookData;
}
