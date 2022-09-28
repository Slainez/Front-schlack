import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public pseudo!: string | null;
  public isPseudoExist!: boolean;
  public pseudoGroup!: FormGroup;

  constructor() {
    if (localStorage.getItem('pseudo') === null) {
      console.log('null');
      this.isPseudoExist = false;
    } else {
      console.log('not null');
      this.isPseudoExist = true;
      this.pseudo = localStorage.getItem('pseudo');
    }
  }

  ngOnInit(): void {
    this.pseudoGroup = new FormGroup({
      pseudo: new FormControl(''),
    });
  }

  public onSubmit() {
    console.log('toto = ', this.pseudoGroup.value);
    localStorage.setItem('pseudo', this.pseudoGroup.value.pseudo);
  }
}
