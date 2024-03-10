import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { HOST, PORT } from '../shared/constants'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private socket: Socket;

  constructor() {
    this.socket = io(HOST + PORT, {transports: ['websocket', 'pulling', 'flashsocket']});
  }

  connectSocket(){
    this.socket.connect();
  }

  disconnectSocket(){
    this.socket.disconnect();
  }

  signInRequest(email: string, password: string) {
    this.socket.emit('login', {email, password});
  }

  signUpRequest(email: string, password: string) {
    this.socket.emit('register', {email, password});
  }

  sendMessageRequest(message : string) {
    this.socket.emit('message', {message});
  }

  activeMessageRequest(token : string) {
    this.socket.emit('active', {token});
  }

  getDataRequest(request : string) : Observable<any> {
    return new Observable((ob) => {
      this.socket.on(request, (data : any) => {
        ob.next(data);
      });
    });
  }

}
