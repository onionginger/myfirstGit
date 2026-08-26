import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  
  isLoggedin = false;
  username="";
  password="";
  
  Buttonclick() {
    alert(this.username + ":" + this.password)
  }

}
