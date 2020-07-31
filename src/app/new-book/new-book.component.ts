import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-new-book',
    templateUrl: './new-book.component.html',
    styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        // Ensure that clicking a router-link for this component always reloads
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    }
}
