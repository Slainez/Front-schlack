import { Component, OnInit } from '@angular/core';
import { ChannelsService } from 'src/app/channels/services/Channels.service';
import { Channel } from '../../models/channel';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public collection!: Channel[];
  constructor(private channelsService: ChannelsService) {
    this.channelsService.collection$.subscribe((data) => {
      this.collection = data;
      console.log('this.collection    ' + this.collection);
    });
  }

  ngOnInit(): void {}
}
