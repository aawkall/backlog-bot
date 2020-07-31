import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NewBookComponent} from './new-book/new-book.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BooksService} from './services/books.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NewBookComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        MatButtonModule,
        HttpClientModule
    ],
    providers: [BooksService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
