import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  winners: User[] = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getWinners().subscribe(winners => {
      this.winners = winners;
    });
  }
}
