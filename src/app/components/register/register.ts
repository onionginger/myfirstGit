import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
    username="";
    password="";
    email="";

    save() {
    let item = { id: this.email };
    localStorage.setItem('session id', JSON.stringify(item))

  }

  gohome() {
    
  }
}
