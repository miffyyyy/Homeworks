import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiData, User } from '../interfaces/user-info.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  userList$ = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<ApiData>(this.apiUrl).pipe(
      map((response: ApiData) => {
        const users = response.data as User[];
        this.updateUserList(users);
        return users;
      })
    );
  }
  private updateUserList(users: User[]): void {
    this.userList$.next(users);
  }
}
