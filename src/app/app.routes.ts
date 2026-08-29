import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Register } from './components/register/register'
import { ChatInterface } from './components/chat-interface/chat-interface'

export const routes: Routes = [

  {path: 'login', 
  component: Login},
  
  {path: '',
    component: Home
  },

  {path: 'register',
    component: Register 
  },

  {path: 'cool-chat-window',
  component: ChatInterface
  }
];

class User {
    constructor(username,email){
        this.username = username;
        this.email = email;
    }
}