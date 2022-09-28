import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMessagesComponent } from './messages/pages/list-messages/list-messages.component';

const routes: Routes = [
  { path: '', redirectTo: 'listMessages/1', pathMatch: 'full' },
  {
    path: 'channels',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesModule),
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
