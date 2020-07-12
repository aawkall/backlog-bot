import {Component, OnInit} from '@angular/core';

import {BookType} from '../shared/models/book-type.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentTitle: string;
  currentAuthor: string;
  bookType: BookType;
  // cover image variable? path? uri?
  percentageComplete: number;

  constructor() { }

  ngOnInit(): void {
    // For now, initialize with dummy data to work on formatting
    // Image can also be hardcoded from the assets folder

    this.currentTitle = 'The Fifth Season';
    this.currentAuthor = 'N. K. Jemisin';
    this.bookType = BookType.Fiction;
    this.percentageComplete = 82;
  }
}
