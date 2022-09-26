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
  public id!: number;
  constructor(
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    public router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.id = this.route.snapshot.params['id'];
        console.log(event);
        messagesService.getAllMessagesFromChannel(this.id);
        this.messagesService.collection$.subscribe((data) => {
          this.collection = data;
          console.log('this.collection ------' + this.collection);
        });
      });
  }
  ngOnChanges(): void {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {}
}
