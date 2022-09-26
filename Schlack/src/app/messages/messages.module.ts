import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { ListMessagesComponent } from './pages/list-messages/list-messages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListMessagesComponent],
  imports: [CommonModule, MessagesRoutingModule, SharedModule],
})
export class MessagesModule {}
