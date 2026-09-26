import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  loginObj:any = {
    


  }
  
  checkExists() {
 
    alert(this.username + ":" + this.password)       
    }


  password="";
  email="";
  username="";

  count = 0;
  submitted = false;

  saveData() {
    let data = { id: 10, name:'zyz'};

    localStorage.setItem('session', JSON.stringify(data))
  }
}
