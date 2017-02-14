import {Component, OnInit, OnDestroy} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  cuisines: FirebaseListObservable<any[]>;
  restaurant: Observable<any[]>;
  exists;

  constructor(private af: AngularFire) {

  }

  ngOnInit() {
    this.cuisines = this.af.database.list('/cuisines', {
      query: {
        orderByValue: true
      }
    });
    this.restaurant = this.af.database.list('/restaurants', {
      query: {
        orderByChild: 'rating',
        startAt: 3,
        endAt: 5,
        limitToFirst: 3
      }
    });
  }

  add() {
    this.af.database.list('/restaurants').push({name: ""})
      .then(x => {
        // x.key
        let restaurant = {name: 'My new restaurant'};
        let update = {};
        update['restaurants/' + x.key] = restaurant;
        update['restaurants-by-city/camberwell/' + x.key] = restaurant;

        this.af.database.object('/').update(update);
      })
      .catch(error => console.log(error));
  }

  update() {
    this.af.database.object('/favourites/1/10').set(null);
  }

  remove() {
    this.af.database.object('/restaurant').remove()
      .then(x => console.log("SUCCESS"))
      .catch(error => console.log(error));
  }

}
