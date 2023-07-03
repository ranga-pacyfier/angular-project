import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';
import { User } from '../shared/models/user.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: MatTableDataSource<User>;
  filterScore: number | null = null;
  displayedColumns: string[] = ['name', 'score', 'action'];

  constructor(private firebaseService: FirebaseService) {
    this.filteredUsers = new MatTableDataSource<User>([]);
  }

  ngOnInit(): void {
    this.firebaseService.getUsers().subscribe(users => {
      this.users = users.filter(user => user.age < 21);
      this.applyFilter();
    });
  }

  applyFilter(): void {
    if (this.filterScore === null) {
      this.filteredUsers.data = this.users;
    } else {
      this.filteredUsers.data = this.users.filter(user => user.score >= this.filterScore!);
    }
  }

  addToWinners(user: User): void {
    const confirmAdd = confirm('Confirm adding to winners');
    if (confirmAdd) {
      this.firebaseService.addToWinners(user);
    }
  }
}
