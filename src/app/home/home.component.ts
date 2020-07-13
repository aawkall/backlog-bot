import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {

    // Ensure that clicking a router-link for this component always reloads
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });

    // For now, initialize with dummy data to work on formatting
    // Image can also be hardcoded from the assets folder
    this.currentTitle = 'The Fifth Season';
    this.currentAuthor = 'N. K. Jemisin';
    this.bookType = BookType.Fiction;
    this.percentageComplete = Math.floor(Math.random() * Math.floor(100));
  }
}
