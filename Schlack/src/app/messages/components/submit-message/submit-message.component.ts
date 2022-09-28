import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from '../../services/messages.service';
import {
  faPaperPlane,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit-message',
  templateUrl: './submit-message.component.html',
  styleUrls: ['./submit-message.component.scss'],
})
export class SubmitMessageComponent implements OnInit {
  faPaperPlane: IconDefinition = faPaperPlane;
  public msg!: Message;
  public form!: FormGroup;
  public id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let nb: number = Math.floor(Math.random() * 666);
    // this.form = this.formBuilder.group({
    //   content: [this.msg.content],
    //   user: `User`,
    // });
    this.form = new FormGroup({
      content: new FormControl(''),
      user: new FormControl(`User` + nb),
      channel: new FormControl({ id: 8 }),
    });
  }
  public onSubmit() {
    console.log(this.form.value);
    return this.messagesService.add(this.form.value);
    // this.activatedRoute.pathFromRoot[1].url.subscribe((val) =>
    //   console.log(val[0].path)
    // );
  }
}
