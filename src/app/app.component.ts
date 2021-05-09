import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-switch-labels-and-changes';

  foo = false;
  count = 0;

  changeCount(event: any): void {
    this.count++;
  }
}
