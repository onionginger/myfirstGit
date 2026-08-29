import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Register } from './components/register/register'
import { Chat} from './components/chat/chat'

export const routes: Routes = [

  {path: 'login', 
  component: Login},
  
  {path: '',
    component: Home
  },

  {path: 'register',
    component: Register 
  },

  {path: 'cool-chat',
  component: Chat
  }
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