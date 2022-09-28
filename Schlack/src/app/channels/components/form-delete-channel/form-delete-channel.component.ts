import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChannelsService } from '../../services/Channels.service';

@Component({
  selector: 'app-form-delete-channel',
  templateUrl: './form-delete-channel.component.html',
  styleUrls: ['./form-delete-channel.component.scss'],
})
export class FormDeleteChannelComponent implements OnInit {
  @Input() id!: number;
  @Input() name!: string;

  constructor(
    public channelService: ChannelsService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  public onDelete() {
    this.channelService.delete(this.id).subscribe((data) => {
      this.modal.close('Close click');
      this.channelService.getChannels();
    });
  }
}
