import { Injectable } from '@angular/core';
import { apiData, EachBook } from './interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookList: EachBook[] = [];
  bookList$ = new Subject();

  constructor(private http: HttpClient) {}

  getBooks(name: string): Observable<any> {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${name}`;
    if (name.trim() !== '') {
      return this.http.get<apiData>(apiUrl).pipe(
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
}
