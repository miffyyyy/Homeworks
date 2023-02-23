import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WishItemComponent } from './wish-item/wish-item.component';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent,
    SearchInputComponent,
    NavBarComponent,
    HomePageComponent,
    WishItemComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
