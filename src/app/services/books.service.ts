import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {BookType, Book, Rating, Shelf} from '../models/book.model';


@Injectable()
export class BooksService {

    constructor(private httpClient: HttpClient) {
    }

    httpCallExample(): Observable<string> {
        let goodReadsSearchUrl = 'https://www.goodreads.com/search/index.xml';
        let subject = new Subject<string>();

        // Get the XML book info from Goodreads
        this.httpClient.get(goodReadsSearchUrl + 'Ender%27s+Game', {observe: 'response', responseType: 'text'})
            .subscribe(response => {

                // Set book list to subject
                subject.next('sample response');
            }, (error: HttpErrorResponse) => {
                console.log(error.status + ": " + error.error);
                subject.error(error.error);
            });

        return subject.asObservable();
    }


    // --- Methods for Backlog Browser ---

    // Get all books on the CurrentlyReading shelf
    getCurrentlyReading(): Book[] {
        const currentBook: Book = {
            title: 'The Fifth Season',
            author: 'N. K. Jemisin',
            isbn: '9780316229296',
            coverUrl: 'assets/images/book-the-fifth-season.jpg',
            bookType: BookType.Fiction,
            shelf: Shelf.CurrentlyReading,
            currentPage: 468,
            totalPages: 468,
            percentageComplete: 100,
            rating: Rating.fiveStars,
        };

        return [currentBook];
    }

    // Get all books on the WantToRead shelf - can be filtered by the UI dynamically
    getAllWantToRead(): Book[] {
        return null;
    }

    // Get all books on the OnHold shelf
    getAllOnHold(): Book[] {
        return null;
    }

    // Get all books on the Read shelf
    getAllRead(): Book[] {
        return null;
    }

    // --- Methods for Individual Book operations ---

    // Get WantToRead book from any of the listed types
    // Can be used for books of one type, or combo types
    getRandomWantToRead(bookTypes: BookType[]): Book {
        return null;
    }

    // Mark given book as CurrentlyReading
    markAsCurrentlyReading(currentBook: Book) {

    }

    // Mark given book as Read
    markAsRead(finishedBook: Book) {

    }

    // Mark given book as OnHold
    markAsOnHold(onHoldBook: Book) {

    }

    // --- CRUD Operations for Books ---
    addNewBook(newBook: Book) {

    }
    deleteBook(deleteBook: Book) {

    }
    updateBook(updateBook: Book) {

    }
}
