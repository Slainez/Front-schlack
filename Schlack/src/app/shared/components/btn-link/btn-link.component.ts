import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-link',
  templateUrl: './btn-link.component.html',
  styleUrls: ['./btn-link.component.scss'],
})
export class BtnLinkComponent implements OnInit {
  @Input() public link!: string;
  @Input() public name!: string;
  constructor() {}

  ngOnInit(): void {}
}
