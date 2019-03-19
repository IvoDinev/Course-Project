import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
  feature: string = 'recipe';
  featureReceived(eventData: string) {
    this.feature = eventData;
  }
}
