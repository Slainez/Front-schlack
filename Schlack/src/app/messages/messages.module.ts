import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { ListMessagesComponent } from './pages/list-messages/list-messages.component';
import { SharedModule } from '../shared/shared.module';
import { SubmitMessageComponent } from './components/submit-message/submit-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ListMessagesComponent, SubmitMessageComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ],
  exports: [SubmitMessageComponent],
})
export class MessagesModule {}
