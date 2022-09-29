import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChannelType } from 'src/app/core/enums/channel-type';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from '../../services/Channels.service';

@Component({
  selector: 'app-form-channel',
  templateUrl: './form-channel.component.html',
  styleUrls: ['./form-channel.component.scss'],
})
export class FormChannelComponent implements OnInit {
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
      name: [
        this.channel.name,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  public onSubmit() {
    this.channelService.add(this.form.value).subscribe((data) => {
      this.modal.close('Close click');
      this.router.navigate([`listMessages/${data.id}`]);
      this.channelService.getChannels();
    });
  }
}
