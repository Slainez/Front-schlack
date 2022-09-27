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
    // this.collection$ = this.httpClient.get<Message[]>(
    //   `${this.urlApi}/messages`
    // );
  }

  public getAllMessagesFromChannel(id: number) {
    this.collection$ = this.httpClient.get<Message[]>(
      `${this.urlApi}/messages/` + id
    );
  }

  public getAllMessagesFromChannel2(id: number) {
    this.httpClient
      .get<Message[]>(`${this.urlApi}/messages/` + id)
      .subscribe((receivedItems) => this.collection2$.next(receivedItems));
  }
}
