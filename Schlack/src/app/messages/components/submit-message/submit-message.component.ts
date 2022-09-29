import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';
import {
  faPaperPlane,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/utils/editorConfig';
import { getIdFromUrl } from 'src/app/shared/utils/getIdFromUrl';

@Component({
  selector: 'app-submit-message',
  templateUrl: './submit-message.component.html',
  styleUrls: ['./submit-message.component.scss'],
})
export class SubmitMessageComponent implements OnInit {
  faPaperPlane: IconDefinition = faPaperPlane;
  public form!: FormGroup;
  public id!: number;
  public url!: string;
  public pseudo!: string | null;
  editorConfig: AngularEditorConfig = editorConfig;

  constructor(private messagesService: MessagesService, public router: Router) {
    this.getIdOfChannelFromUrl();
  }

  ngOnInit(): void {
    this.id = getIdFromUrl(this.router);
    this.form = new FormGroup({
      content: new FormControl('', Validators.required),
      user: new FormControl(''),
      channel: new FormControl({ id: this.id }),
    });
  }

  /*
   * get the id of channel from url on url change
   */

  public getIdOfChannelFromUrl() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.id = getIdFromUrl(this.router);
      });
  }

  /*
   * Bind a CTRL + Enter to trigger onSubmit
   */
  @HostListener('document:keydown.control.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    event.preventDefault();
    this.onSubmit();
  }
  public onSubmit() {
    this.form.value.user = localStorage.getItem('pseudo');
    if (this.form.value.user === null) {
      this.form.value.user = 'Guest' + Math.floor(Math.random() * 666);
    }
    this.form.value.channel.id = this.id;
    this.form.value.timestamp = Date.now();
    this.messagesService.add(this.form.value);
    this.form.controls[`content`].reset();
  }
}
