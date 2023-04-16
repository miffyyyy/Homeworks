import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ApiData, User } from '../interfaces/user-info.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  UserList: User[] = [];
  UserList$ = new Subject<User[]>();

  constructor(private http: HttpClient) {}

  getData(): Observable<ApiData> {
    return this.http.get<ApiData>(this.apiUrl).pipe(
      tap((data) => {
        map((data: ApiData) => {
          const users = data.data.map((item: any) => ({
            email: item.email,
            first_name: item.first_name,
            last_name: item.last_name,
            avatar: item.avatar,
          }));
          this.UserList = users;
          this.UserList$.next(users);
          console.log(users);
        }),
          catchError((err: any) => {
            console.log(err);
            return err;
          });
      })
    );
  }
}
