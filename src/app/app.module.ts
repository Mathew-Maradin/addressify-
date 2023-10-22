import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserGridComponent,
    UserCardComponent,
    UserDetailsComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: UserGridComponent},
      {path: 'details/:id', component: UserDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
