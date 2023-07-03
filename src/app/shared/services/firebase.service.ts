import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private usersRef: AngularFireList<User>;
  private winnersRef: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list<User>('/users');
    this.winnersRef = db.list<User>('/winners');
  }

  getUsers(): Observable<User[]> {
    return this.usersRef.valueChanges();
  }

  getWinners(): Observable<User[]> {
    return this.winnersRef.valueChanges();
  }

  addToWinners(user: User): Promise<void> {
    return this.winnersRef.push(user).then(() => {});
  }
}
