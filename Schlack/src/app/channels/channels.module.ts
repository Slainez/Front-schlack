import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { SharedModule } from '../shared/shared.module';
import { FormChannelComponent } from './components/form-channel/form-channel.component';
import { FormEditChannelComponent } from './components/form-edit-channel/form-edit-channel.component';
import { FormDeleteChannelComponent } from './components/form-delete-channel/form-delete-channel.component';

@NgModule({
  declarations: [PageAddChannelComponent, FormChannelComponent, FormEditChannelComponent, FormDeleteChannelComponent],
  imports: [CommonModule, ChannelsRoutingModule, SharedModule],
})
export class ChannelsModule {}
