import {Component} from '@angular/core';
import {faBook} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'backlog-bot';
    faBook = faBook;
}
