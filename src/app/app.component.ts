import { Component } from '@angular/core';

import _ from 'lodash';

import map from 'lodash/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  items = [
    { id: 1 }, 
    { id: 2 },
    { id: 3 }
  ];

  ids: number[];
  ids2: number[];

  constructor() {

    // Use the global lodash import, this isn't optimal since it will pull in the whole lodash object
    // But it can be convenient in testing
  	this.ids = _.map(this.items, 'id');
    console.log('ids', this.ids);

    // A better way is to import the specific lodash function, that way it's tree shaking friendly
    this.ids2 = map(this.items, 'id');
    console.log('ids2', this.ids2);
  }
}
