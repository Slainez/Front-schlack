import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormChannelComponent } from 'src/app/channels/components/form-channel/form-channel.component';
import { ChannelsService } from 'src/app/channels/services/Channels.service';
import { Channel } from '../../models/channel';
import {
  faEdit,
  faPlus,
  faTrash,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';
import { FormEditChannelComponent } from 'src/app/channels/components/form-edit-channel/form-edit-channel.component';
import { FormDeleteChannelComponent } from 'src/app/channels/components/form-delete-channel/form-delete-channel.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public collection!: Channel[];
  public faPlus = faPlus;
  public faEdit = faEdit;
  public faTrash = faTrash;
  public faHashtag = faHashtag;
  constructor(
    private channelsService: ChannelsService,
    private modalService: NgbModal
  ) {
    /*
     * subscribe to our Channel collection to get list of channels
     * to display channel navigation
     */
    this.channelsService.collection$.subscribe((data) => {
      this.collection = data;
    });
  }

  /*
   * open modal for our createChannel
   */
  open() {
    this.openModal(FormChannelComponent);
  }

  /*
   * open modal for our editChannel
   */

  edit(id: number, name: string) {
    this.openModal(FormEditChannelComponent, id, name);
  }

  /*
   * open modal for our deleteChannel
   */

  delete(id: number, name: string) {
    this.openModal(FormDeleteChannelComponent, id, name);
  }

  /*
   * generic function for modal opening
   */

  openModal(component: any, id?: number, name?: string) {
    const modalRef = this.modalService.open(component, {
      size: 'sm',
      centered: true,
      animation: true,
    });
    if (id != undefined) {
      modalRef.componentInstance.id = id;
    }
    if (name != undefined) {
      modalRef.componentInstance.name = name;
    }
  }
  ngOnInit(): void {}
}
