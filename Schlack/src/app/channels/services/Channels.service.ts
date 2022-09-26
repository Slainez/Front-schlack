import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Channel } from 'src/app/core/models/Channel';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  public collection$: Observable<Channel[]>;
  private urlApi: string;
  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = this.httpClient.get<Channel[]>(
      this.urlApi + `/channels`
    );
  }
}
