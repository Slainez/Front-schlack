import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';

const routes: Routes = [{ path: 'add', component: PageAddChannelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsRoutingModule {}
