import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
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

  /*
   * Function to add a Channel using POST method
   */
  public add(item: Channel): Observable<Channel> {
    return this.httpClient.post<Channel>(`${this.urlApi}/channels`, item);
  }

  /*
   * Function to update an existing Channel using POST method
   */

  public update(channel: Channel): Observable<Channel> {
    return this.httpClient.put<Channel>(
      `${this.urlApi}/channels/` + channel.id,
      channel
    );
  }

  /*
   * Function to get all Channels
   * to refresh our collection$
   */
  public getChannels() {
    this.httpClient
      .get<Channel[]>(this.urlApi + `/channels`)
      .subscribe((receivedItems) => this.collection$.next(receivedItems));
  }

  /*
   * function to delete a specific Channel
   * using an id
   */

  public delete(id: number): Observable<Channel> {
    return this.httpClient.delete<Channel>(`${this.urlApi}/channels/` + id);
  }
}
