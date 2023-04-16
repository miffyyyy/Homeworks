import { Component, OnInit } from '@angular/core';
import { User, UserList } from './interfaces/user-info.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'user-app';
  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getData().subscribe();
    this.userService.UserList$.subscribe((data: User[]) => {
      this.users = data;
    });
  }
}
