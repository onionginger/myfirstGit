import { Component, OnInit } from '@angular/core';
import { Socket } from '../socket'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-chat',
  styleUrl: './chat.css',
  templateUrl: './chat.html',
})
export class Chat implements OnInit{
  messagecontent:string="";
  messages:string[] = [];
  ioConnection:any;
 
  constructor(private socket:Socket) {
    
  }
  
  ngOnInit(){
    this.initIoConnection()
    }
    private initIoConnection(){
      this.socket.initSocket(); 
      this.ioConnection =   this.socket.getMessage().subscribe((message:string) => {
         this.messages.push(message) 
        }
    );
  }
 chat() {

    if(this.messagecontent) {
      this.socket.send(this.messagecontent);
      this.messagecontent='';
    }else{
      console.log("no message")
    }
  }

}
