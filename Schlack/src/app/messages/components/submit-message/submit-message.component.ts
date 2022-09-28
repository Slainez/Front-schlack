import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from '../../services/messages.service';
import {
  faPaperPlane,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/utils/editorConfig';
// import { editorConfig } from '';

@Component({
  selector: 'app-submit-message',
  templateUrl: './submit-message.component.html',
  styleUrls: ['./submit-message.component.scss'],
})
export class SubmitMessageComponent implements OnInit, OnChanges {
  faPaperPlane: IconDefinition = faPaperPlane;
  public msg!: Message;
  public form!: FormGroup;
  public id!: number;
  public url!: string;
  editorConfig: AngularEditorConfig = editorConfig;
  constructor(private messagesService: MessagesService, public router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.url = this.router.routerState.snapshot.url;
        this.id = Number(this.url.substring(this.url.lastIndexOf('/') + 1));
      });
  }

  ngOnInit(): void {
    let nb: number = Math.floor(Math.random() * 666);
    this.url = this.router.routerState.snapshot.url;
    this.id = Number(this.url.substring(this.url.lastIndexOf('/') + 1));
    this.form = new FormGroup({
      content: new FormControl(''),
      user: new FormControl(`User` + nb),
      channel: new FormControl({ id: this.id }),
    });
  }
  @HostListener('document:keydown.control.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    event.preventDefault();
    this.onSubmit();
  }
  ngOnChanges(): void {}
  public onSubmit() {
    this.form.value.channel.id = this.id;
    this.form.value.timestamp = Date.now();
    this.messagesService.add(this.form.value);
    this.form.controls[`content`].reset();
  }
}
