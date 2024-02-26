import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ConfirmationService, MessageService]
})
export class HomeComponent implements OnInit {
  @ViewChild('textarea') textarea!: ElementRef;
  messageItem: any = [{ botMessage: true, message: "Fake Chat how can i help you today?" }];
  hasMessage: boolean = true;
  currentHeight: number = 0;
  botMessage : boolean = false;

  constructor(
    private router: Router, 
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    private accService : AccountService,
    private service : RequestService
  ) { }

  ngOnInit(): void {
      this.service.getDataRequest('message').subscribe((data) => {
        this.messageItem.pop();
        this.messageItem.push({botMessage : true, message: data.message});
        this.botMessage = false;
      })
  }

  onInputChange() {
    const value = this.textarea.nativeElement.value;
    const lines = value.split("\n").length - 1;
    if (lines != this.currentHeight) {
      this.currentHeight = lines;
      this.textarea.nativeElement.style.height = `${52 + lines * 24}px`;
    }
    if (value.trim() !== '') this.hasMessage = false;
    else this.hasMessage = true;
  }

  onKeyDown(event: KeyboardEvent) {
    const message = this.textarea.nativeElement.value.trim();
    if (event.key == "Enter" && message !== '') {
      event.preventDefault();
      if (event.shiftKey) {
        this.textarea.nativeElement.value += '\n';
      } else this.onSendMessage();
    }
  }

  onSendMessage() {
    const message = this.textarea.nativeElement.value;
    const newItem = { botMessage: false, message };
    const botItem = { botMessage: true, message: '' };
    this.messageItem.push(newItem);
    this.messageItem.push(botItem);
    this.textarea.nativeElement.value = '';
    this.onInputChange();
    this.botMessage = true;
    this.service.sendMessageRequest(message);
  }

  onNewMessage() {
    this.messageItem = [{ botMessage: true, message: "Fake Chat how can i help you today?" }];
  }

  onSignOut() {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to sign out.',
      accept: () => {
        this.accService.removeUser();
        this.router.navigate(['/login']);
      },
      reject: () => {
      }
    });
  }
}
