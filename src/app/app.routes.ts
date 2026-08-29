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

class User {
    constructor(username,email){
        this.username = username;
        this.email = email;
    }
}
