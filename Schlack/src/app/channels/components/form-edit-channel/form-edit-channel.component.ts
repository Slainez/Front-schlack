import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChannelType } from 'src/app/core/enums/channel-type';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from '../../services/Channels.service';

@Component({
  selector: 'app-form-edit-channel',
  templateUrl: './form-edit-channel.component.html',
  styleUrls: ['./form-edit-channel.component.scss'],
})
export class FormEditChannelComponent implements OnInit {
  public channel: Channel;
  public form!: FormGroup;
  public types: string[];
  @Output() public submitted: EventEmitter<Channel>;
  constructor(
    private formBuilder: FormBuilder,
    private channelService: ChannelsService,
    private router: Router,
    private modal: NgbActiveModal
  ) {
    this.channel = new Channel();
    this.submitted = new EventEmitter<Channel>();
    this.types = Object.values(ChannelType);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.channel.name],
      id: [this.channel.id],
    });
  }
}
