import { Component } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Chat Fake';
  constructor(private socketService : RequestService) {
    this.socketService.connectSocket();
  }
}
