import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/core/models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public collection$!: Observable<Message[]>;
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    // this.collection$ = this.httpClient.get<Message[]>(
    //   `${this.urlApi}/messages`
    // );
  }

  public getAllMessagesFromChannel(id: number) {
    this.collection$ = this.httpClient.get<Message[]>(
      `${this.urlApi}/messages/` + id
    );
  }

  public add(msg: Message) {
    this.httpClient.post<Message>(`${this.urlApi}/messages`, msg).subscribe();
  }
}
