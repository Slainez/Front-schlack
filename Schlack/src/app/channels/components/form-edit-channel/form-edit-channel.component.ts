import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ChannelsService } from '../../services/Channels.service';

@Component({
  selector: 'app-form-edit-channel',
  templateUrl: './form-edit-channel.component.html',
  styleUrls: ['./form-edit-channel.component.scss'],
})
export class FormEditChannelComponent implements OnInit {
  public form!: FormGroup;
  @Input() id!: number;
  @Input() name!: string;
  constructor(
    private formBuilder: FormBuilder,
    private channelService: ChannelsService,
    private modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.minLength(2)]],
      id: [this.id],
    });
  }

  /*
   * Function to update a Channel using UPDATE method
   * close the modal and call getChannels to refresh
   * collection$
   */

  public onSubmit() {
    this.channelService.update(this.form.value).subscribe((data) => {
      this.modal.close('Close click');
      this.channelService.getChannels();
    });
  }
}
