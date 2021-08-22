import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;
  message ='';

  constructor() { }

  ngOnInit(): void {
  }
  submitMessage(event: any){
    /*alert(event.target.value);*/
    let value = event.target.value.trim();
    
    this.message = '';
    this.conversation.latestMessage = value;
    this.conversation.messages.unshift({
      id:1,
      body: value,
      Time: "10:30",
      me: true
    });
    
  }
  emojiClicked(event:any){
    this.message += event.emoji.native
  }

}
