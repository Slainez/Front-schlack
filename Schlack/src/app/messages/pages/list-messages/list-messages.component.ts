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

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss'],
})
export class ListMessagesComponent implements OnInit, OnChanges {
  public collection!: Message[];
  public collection2!: Message[];
  public id!: number;
  constructor(
    private route: ActivatedRoute,
    public messagesService: MessagesService,
    public router: Router
  ) {
    this.messagesService._connect();

    // this.messagesService.collection2$.subscribe((data) => {
    //   this.collection = data;
    //   console.log('this.collection 2------' + data);
    // });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.id = this.route.snapshot.params['id'];

        this.messagesService._send(this.id);

        this.collection2 = this.messagesService.newMsg;
        console.log(typeof this.messagesService.newMsg);

        messagesService.getAllMessagesFromChannel2(this.id);
        this.messagesService.collection2$.subscribe((data) => {
          this.collection = data;
        });
        // messagesService.getAllMessagesFromChannel(this.id);
        // this.messagesService.collection$.subscribe((data) => {
        //   this.collection = data;
        // });
      });
  }

  ngOnChanges(): void {
    this.collection2 = this.messagesService.newMsg;
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {}
}
