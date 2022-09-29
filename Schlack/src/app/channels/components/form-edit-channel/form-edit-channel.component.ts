import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @Input() id!: number;
  @Input() name!: string;
  constructor(
    private formBuilder: FormBuilder,
    private channelService: ChannelsService,
    private modal: NgbActiveModal
  ) {
    this.channel = new Channel();
    this.types = Object.values(ChannelType);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        this.name,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
        ],
      ],
      id: [this.id],
    });
  }
  public onSubmit() {
    this.channelService.update(this.form.value).subscribe((data) => {
      this.modal.close('Close click');
      this.channelService.getChannels();
    });
  }
}
