import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChannelType } from 'src/app/core/enums/channel-type';
import { Channel } from 'src/app/core/models/channel';

@Component({
  selector: 'app-form-channel',
  templateUrl: './form-channel.component.html',
  styleUrls: ['./form-channel.component.scss'],
})
export class FormChannelComponent implements OnInit {
  @Input() init!: Channel;
  public form!: FormGroup;
  public types: string[];
  @Output() public submitted: EventEmitter<Channel>;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Channel>();
    this.types = Object.values(ChannelType);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.init.name],
      channelType: [this.init.channelType],
    });
  }

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }
}
