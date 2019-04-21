import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { LoginService } from '../httpservice/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  private errorMessage: string=null;
  userModel = new UserModel();
  userLoggedIn = new UserModel();
  componentProperty:string;
  getUserLoggedIn() {
    console.log("Button Clicked");
    this.loginService.getUserLoggedIn(this.userModel).subscribe(userLoggedIn => this.userLoggedIn = userLoggedIn,
      error => this.errorMessage = <any>error);
    console.log(this.userLoggedIn);
  }


  hide = true;
}
