import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  // @Output() public submitted: EventEmitter<Channel>;
  constructor(
    private formBuilder: FormBuilder,
    private channelService: ChannelsService,
    private router: Router,
    private modal: NgbActiveModal,
    private modalService: NgbModal
  ) {
    this.channel = new Channel();
    this.types = Object.values(ChannelType);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.channel.name],
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
