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
  public pseudo!: string | null;
  editorConfig: AngularEditorConfig = editorConfig;

  greeting: any;
  name!: string;

  constructor(public messagesService: MessagesService, public router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.url = this.router.routerState.snapshot.url;
        this.id = Number(this.url.substring(this.url.lastIndexOf('/') + 1));
      });
  }

  ngOnInit(): void {
    this.pseudo = localStorage.getItem('pseudo');
    this.url = this.router.routerState.snapshot.url;
    this.id = Number(this.url.substring(this.url.lastIndexOf('/') + 1));
    this.form = new FormGroup({
      content: new FormControl(''),
      user: new FormControl(this.pseudo),
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
    // this.messagesService.newmessage = this.form.value.content;
    // console.log(
    //   'this.messagesService.newmessage------',
    //   this.messagesService.newmessage
    // );

    // this.messagesService.connect();
    this.form.value.channel.id = this.id;
    this.form.value.timestamp = Date.now();
    // this.messagesService.add(this.form.value);
    this.messagesService._send(this.id);

    this.form.controls[`content`].reset();
  }
}
