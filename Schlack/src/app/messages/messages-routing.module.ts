import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMessagesComponent } from './pages/list-messages/list-messages.component';

const routes: Routes = [
  {
    path: 'listMessages/:id',
    component: ListMessagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
