import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  feature: string = 'recipe';
  featureReceived(eventData: string) {
    this.feature = eventData;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAl2t2meo2ndpARgHjH4ijYa7EFo2fZT1A",
      authDomain: "recipes-82842.firebaseapp.com"
    })
  }
}
