import { Component } from '@angular/core';

@Component({
  selector: 'app-event-emmiter',
  templateUrl: './event-emmiter.component.html',
  styleUrls: ['./event-emmiter.component.css']
})
export class EventEmmiterComponent  {
  sendMessage(event: any){
    alert(`O número recebido foi ${event}`)
  }
}
