import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Register } from './components/register/register'
import { Profile } from './components/profile/profile';

let dummydata = [
  {name:"batman", email:"bruce@waynemansion.gt", password:"imasadorphan"}
]

export const routes: Routes = [

  {path: 'login', 
  component: Login},
  
  {path: 'profile',
    component: Profile
  },

  {path: 'register',
    component: Register 
  },

  {
    path:'edit',
    component: Profile,
  },
  {path:'',redirectTo:'login', pathMatch: 'full' }

];

export class User {
    
  constructor(username:string, email:string){

    //let d = new Date();
    this.username = username;
    this.email = email;
    //this.age = birthdate - d.getFullYear();

  
    }

  username:string= "";
  email:string = "";
  birthdate:string = "";
  password:string = "";
  age:number = 0;
  valid:boolean = false;


}

let Users = [
  {
    "name": "shigeo", "email":"kageyama@saltmiddleschool.jp", "password":"mobpsycho"
  },
  {
    "name": "reigen", "email":"arataka@sorcery.jp", "password":"conartist"
  },
  {
    "name": "saitama", "email":"saitama@hero.jp", "password":"onepunchman"
  }
]