import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule,MatInputModule,MatIconModule,MatFormFieldModule, MatCheckboxModule,MatToolbarModule,MatCardModule,MatMenuModule,MatGridListModule, MatChipsModule, MatListModule, MatExpansionModule, MatRadioModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../httpservice/login.service';
import { Jsonp, ConnectionBackend, JsonpModule, HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    MatChipsModule,
    MatListModule,
    MatExpansionModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
