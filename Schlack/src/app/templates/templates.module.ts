import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateContainerComponent } from './components/template-container/template-container.component';



@NgModule({
  declarations: [
    TemplateContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateContainerComponent
  ]
})
export class TemplatesModule { }
