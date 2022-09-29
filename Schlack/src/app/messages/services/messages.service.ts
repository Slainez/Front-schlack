import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/core/models/message';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public collection$!: Observable<Message[]>;
  public collection2$: BehaviorSubject<Message[]> = new BehaviorSubject<
    Message[]
  >([]);
  private urlApi: string;
  public connected!: boolean;

  // ===============websocket======================
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  topic: string = '/topic/greetings';
  stompClient: any;
  public newMsg!: Message[];
  // ===============websocket======================

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  public getAllMessagesFromChannel2(id: number) {
    this.httpClient
      .get<Message[]>(`${this.urlApi}/messages/` + id)
      .subscribe((receivedItems) => this.collection2$.next(receivedItems));
  }
  public add(msg: Message) {
    this.httpClient
      .post<Message>(`${this.urlApi}/messages`, msg)
      .subscribe((data) => {
        this.getAllMessagesFromChannel2(data.channel.id);
      });
  }

  // ===============websocket======================

  _connect() {
    console.log('Initialize WebSocket Connection');
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect(
      {},
      function (frame: any) {
        _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
          _this.connected = true;
          _this.onMessageReceived(sdkEvent);
        });
        //_this.stompClient.reconnect_delay = 2000;
      },
      this.errorCallBack
    );
  }

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error: any) {
    console.log('errorCallBack -> ' + error);
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  /**
   * Send message to sever via web socket
   * @param {*} message
   */
  _send(id: number) {
    console.log('calling logout api via web socket');
    this.stompClient.send('/app/hello', {}, id);
  }

  onMessageReceived(message: any) {
    console.log('Message Recieved from Server :: ' + message);
    this.newMsg = message.body;
    // this.submitMessageComponent.handleMessage(JSON.stringify(message.body));
  }
}
