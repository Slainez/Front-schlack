import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnLinkComponent } from './components/btn-link/btn-link.component';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { TemplatesModule } from '../templates/templates.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BtnLinkComponent, MessageComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [
    BtnLinkComponent,
    MessageComponent,
    TemplatesModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
