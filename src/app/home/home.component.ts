import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

import {Rating, BookType, Book} from '../models/book.model';
import {BooksService} from '../services/books.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    currentBook: Book;

    constructor(private booksService: BooksService, private router: Router) {}

    ngOnInit(): void {

        // Ensure that clicking a router-link for this component always reloads
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });

        // TODO: Backend will go ahead and return a list of current books. UI will just show one book until the UI can be changed to show more than one
        let currentSampleList = this.booksService.getCurrentlyReading();
        this.currentBook = currentSampleList[0];
    }
}
