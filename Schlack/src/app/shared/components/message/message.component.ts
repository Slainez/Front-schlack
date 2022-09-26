import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() public user!: string;
  @Input() public msg!: string;
  constructor() {}

  ngOnInit(): void {}
}
