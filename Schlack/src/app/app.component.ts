import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/** Commentaire Test
 *
 * @Description this component is used to start the application
 *
 */
export class AppComponent {
  /**
   * this propertie is used for the title of the application
   */
  public title: string;

  constructor() {
    this.title = 'Schlack';
  }
}
