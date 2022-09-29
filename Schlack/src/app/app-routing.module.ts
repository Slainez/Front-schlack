import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMessagesComponent } from './messages/pages/list-messages/list-messages.component';

const routes: Routes = [
  { path: '', redirectTo: 'listMessages/1', pathMatch: 'full' },
  {
    path: 'messages',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesModule),
  },
  {
    path: 'channels',
    loadChildren: () =>
      import('./channels/channels.module').then((m) => m.ChannelsModule),
  },
  {
    path: 'listMessages/:id',
    component: ListMessagesComponent,
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
