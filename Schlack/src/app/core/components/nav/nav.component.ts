import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormChannelComponent } from 'src/app/channels/components/form-channel/form-channel.component';
import { ChannelsService } from 'src/app/channels/services/Channels.service';
import { Channel } from '../../models/channel';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormEditChannelComponent } from 'src/app/channels/components/form-edit-channel/form-edit-channel.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public collection!: Channel[];
  faPlus = faPlus;
  faEdit = faEdit;
  constructor(
    private channelsService: ChannelsService,
    private modalService: NgbModal
  ) {
    this.channelsService.collection$.subscribe((data) => {
      this.collection = data;
    });
  }
  open() {
    const modalRef = this.modalService.open(FormChannelComponent, {
      size: 'sm',
      centered: true,
      animation: true,
      // backdrop: 'static',
    });
    modalRef.componentInstance.name = 'World';
  }
  edit(id: number, name: string) {
    const modalRef = this.modalService.open(FormEditChannelComponent, {
      size: 'sm',
      centered: true,
      animation: true,
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.name = name;
  }

  ngOnInit(): void {}
}
