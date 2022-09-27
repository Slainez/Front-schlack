import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Channel } from 'src/app/core/models/Channel';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  public collection$: BehaviorSubject<Channel[]> = new BehaviorSubject<
    Channel[]
  >([]);
  private urlApi: string;
  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.getChannels();
  }

  public add(item: Channel): Observable<Channel> {
    return this.httpClient.post<Channel>(`${this.urlApi}/channels`, item);
  }

  public getChannels() {
    this.httpClient
      .get<Channel[]>(this.urlApi + `/channels`)
      .subscribe((receivedItems) => this.collection$.next(receivedItems));
  }
}
