import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user-info.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe();
    this.userService.userList$.subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users);
    });
  }
}
