import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() public previousUser!: string;
  @Input() public user!: string;
  @Input() public date!: string;
  @Input() public msg!: string;
  public htmlString!: string;
  constructor() {}

  ngOnInit(): void {
    this.htmlString = this.msg;
  }
}
