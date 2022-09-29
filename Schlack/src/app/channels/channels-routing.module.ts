import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormChannelComponent } from './components/form-channel/form-channel.component';

const routes: Routes = [
  { path: 'add', component: FormChannelComponent },
  { path: 'edit', component: FormChannelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsRoutingModule {}
