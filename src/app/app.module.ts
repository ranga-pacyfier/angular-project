import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WinnersComponent } from './winners/winners.component';
import { ToppersComponent } from './toppers/toppers.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    WinnersComponent,
    ToppersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
