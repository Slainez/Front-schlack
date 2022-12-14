import { Component, Input, OnInit } from '@angular/core';
// import { faHashtag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-link',
  templateUrl: './btn-link.component.html',
  styleUrls: ['./btn-link.component.scss'],
})
/**
 *
 * @Description this component is used to display a nav element
 *
 */
export class BtnLinkComponent implements OnInit {
  @Input() public link!: string;
  @Input() public name!: string;

  // public faHashtag = faHashtag;
  constructor() {}

  ngOnInit(): void {}
}
