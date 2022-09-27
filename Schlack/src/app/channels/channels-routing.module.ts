import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormChannelComponent } from './components/form-channel/form-channel.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';

const routes: Routes = [{ path: 'add', component: FormChannelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsRoutingModule {}
