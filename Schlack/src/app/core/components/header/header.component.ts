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
    /*
     * check if pseudo is not set in localstorage
     * and display form to set pseudo
     * if its already set display welcome pseudo
     */
    if (localStorage.getItem('pseudo') === null) {
      this.isPseudoExist = false;
    } else {
      this.isPseudoExist = true;
      this.pseudo = localStorage.getItem('pseudo');
    }
  }

  ngOnInit(): void {
    this.pseudoGroup = new FormGroup({
      pseudo: new FormControl(''),
    });
  }

  /*
   * function to set a 'pseudo' in localstorage
   * and display "bienvenu 'Pseudo'"
   */
  public onSubmit() {
    localStorage.setItem('pseudo', this.pseudoGroup.value.pseudo);
    this.isPseudoExist = true;
    this.pseudo = localStorage.getItem('pseudo');
  }

  /*
   * function to remove localstorage to
   * let the user recreate a 'pseudo'
   */

  public forgetPseudo(): void {
    localStorage.removeItem('pseudo');
    this.pseudo = null;
    this.isPseudoExist = false;
  }
}
