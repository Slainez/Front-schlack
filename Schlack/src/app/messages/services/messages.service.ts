import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
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
  public christophe$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  /*
   * function to get Messages from a specific Channel
   * to refresh our collection2$
   */

  public getAllMessagesFromChannel2(id: number) {
    this.httpClient
      .get<Message[]>(`${this.urlApi}/messages/` + id)
      .pipe(
        catchError(this.handleError),
        tap((data) => {
          if (data.length <= 0) {
            this.christophe$.next(
              "Ce canal n'existe pas ou ne contient pas de message "
            );
          } else {
            this.christophe$.next(null);
          }
          console.log(data);
        })
      )
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
