import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnLinkComponent } from './components/btn-link/btn-link.component';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BtnLinkComponent, MessageComponent],
  imports: [CommonModule, RouterModule],
  exports: [BtnLinkComponent, MessageComponent, ReactiveFormsModule],
})
export class SharedModule {}
