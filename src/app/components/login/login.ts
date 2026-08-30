import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Userobject } from '../../../server/Userobject'
import { Userpwd } from '../../../server/userpwd'
import { USERPWDS } from '../../../server/data/pswds.json';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type ': 'application/json'})
}

const BACKEND_URL = 'https://localhost:4200';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  userpwd: Userpwd = {username:'k.su@griffith.edu.au',pwd: '666666'};
  userobj:Userobject={userid: 1 , username: this.userpwd.username, userbirthdate: null,userage:100};
  constructor(private router:Router, private httpClient: HttpClient){}
  ngOnInit(){

  }
  public loginfunc() {
    this.httpClient.post(BACKEND_URL + '/login', this.userpwd, httpOptions)
    .subscribe((data: any) => {
      alert(JSON.stringify(this.userpwd));
      if (data.ok) {

        sessionStorage.setItem('userid',this.userobj.userid.toString());
        sessionStorage.setItem('username', this.userobj.username);
        sessionStorage.setItem('userbirthdate',this.userobj.userbirthdate);
        sessionStorage.setItem('userage',this.userobj.userage.toString());
        this.httpClient.post<Userobject[]>(BACKEND_URL + '/loginafter',this.userobj, httpOptions)
        .subscribe((m: any)=>{console.log(m[0]);});
        this.router.navigateByUrl('account');
      } else {
        alert('Sorry, username or password is not valid');
      }
    });   
  }}
