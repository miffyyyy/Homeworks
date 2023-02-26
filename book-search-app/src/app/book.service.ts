import { Injectable } from '@angular/core';
import { ApiData, EachBook, wishBook } from './interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookList: EachBook[] = [];
  bookList$ = new Subject();

  wishList: wishBook[] = [];
  wishList$ = new Subject();

  constructor(private http: HttpClient) {
    console.log('123');
  }

  getBooks(name: string): Observable<any> {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${name}`;
    if (name.trim() !== '') {
      return this.http.get<ApiData>(apiUrl).pipe(
        tap((data) => {
          this.bookList = data.items.map((each: any) => {
            return {
              picture: each.volumeInfo.imageLinks.smallThumbnail
                ? each.volumeInfo.imageLinks.smallThumbnail
                : '',
              name: each.volumeInfo.title ? each.volumeInfo.title : '',
              publisher: each.volumeInfo.publisher
                ? each.volumeInfo.publisher
                : '',
              data: each.volumeInfo.publishedDate
                ? each.volumeInfo.publishedDate
                : '',
              description: each.volumeInfo.description
                ? each.volumeInfo.description
                : '',
            };
          });
          this.bookList$.next(this.bookList);
          console.log(this.bookList);
        }),
        catchError((err: any) => {
          console.log(err);
          return err;
        })
      );
    }
    return of(0);
  }

  addWishList(book: wishBook) {
    // Add the book to the wishList array
    this.wishList.push(book);
    console.log(book);
    // Emit the updated wishList array as the next value of the wishList$ BehaviorSubject
    return this.wishList$.next(this.wishList);
  }

  // deleteWishList(name: string) {
  //   this.wishList = this.wishList.filter((data: wishBook) => {
  //     return data.name !== name;
  //   });
  //   return this.wishList$.next(this.wishList);
  // }
}
