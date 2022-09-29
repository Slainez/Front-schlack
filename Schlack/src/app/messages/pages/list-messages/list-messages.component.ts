import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
import { filter } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from '../../services/messages.service';
import { getIdFromUrl } from 'src/app/shared/utils/getIdFromUrl';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss'],
})
export class ListMessagesComponent implements OnInit, OnChanges {
  public collection!: Message[];
  public id!: number;
  public christophe$ = this.messagesService.catchError$;
  constructor(public messagesService: MessagesService, public router: Router) {
    this.getIdOfChannelFromUrl();
  }

  /*
   * get the id of channel from url on url change
   */
  public getIdOfChannelFromUrl() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.id = getIdFromUrl(this.router);
        this.messagesService.getAllMessagesFromChannel2(this.id);
        this.messagesService.collection2$.subscribe((data) => {
          this.collection = data;
        });
      });
  }
  ngOnChanges(): void {
    /*
     * get the id of channel from url
     */
    this.id = getIdFromUrl(this.router);
  }

  ngOnInit(): void {}
}
