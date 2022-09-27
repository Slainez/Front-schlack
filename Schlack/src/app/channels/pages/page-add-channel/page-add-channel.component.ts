import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from '../../services/Channels.service';

@Component({
  selector: 'app-page-add-channel',
  templateUrl: './page-add-channel.component.html',
  styleUrls: ['./page-add-channel.component.scss'],
})
export class PageAddChannelComponent implements OnInit {
  // public channel: Channel;
  constructor(private channelService: ChannelsService, private router: Router) {
    // this.channel = new Channel();
  }

  ngOnInit(): void {}

  // public action(item: Channel) {
  // this.channelService.add(item).subscribe((data) => {
  //   this.router.navigate([`listMessages/${data.id}`]);
  //   this.channelService.getChannels();
  // });
  // }
}
