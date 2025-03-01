import { Component } from '@angular/core';
import { Playground } from './shared';
import { MOCK_PLAYGROUNDS } from './shared/mock-playgrounds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  public appPlaygrounds: Playground[] = MOCK_PLAYGROUNDS;
  public playground: Playground;

  public playgroundSelected(playground: Playground): void {
    this.playground = playground;
    console.log('Playground selected', playground);
  }
}
