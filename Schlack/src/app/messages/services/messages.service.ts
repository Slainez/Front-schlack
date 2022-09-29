import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/core/models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public collection$!: Observable<Message[]>;
  public collection2$: BehaviorSubject<Message[]> = new BehaviorSubject<
    Message[]
  >([]);
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  /*
   * function to get Messages from a specific Channel
   * to refresh our collection2$
   */

  public getAllMessagesFromChannel2(id: number) {
    this.httpClient
      .get<Message[]>(`${this.urlApi}/messages/` + id)
      .subscribe((receivedItems) => this.collection2$.next(receivedItems));
  }

  /*
   * Function to add a Message using POST method
   * and call getAllMessagesFromChannel2 to refresh
   * our messages from a specific Channel
   */

  public add(msg: Message) {
    this.httpClient
      .post<Message>(`${this.urlApi}/messages`, msg)
      .subscribe((data) => {
        this.getAllMessagesFromChannel2(data.channel.id);
      });
  }
}
