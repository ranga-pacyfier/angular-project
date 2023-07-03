import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent implements OnInit {
  toppers: User[] = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getUsers().subscribe(users => {
      this.toppers = users.filter(user => user.score > 90);
    });
  }
}
