import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/**
 *
 * @Description this component is used to start the application
 *
 */
export class AppComponent {
  public title: string;

  constructor() {
    this.title = 'Schlack';
  }
}
