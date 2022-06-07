import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadCountries } from './actions/country.actions';
import { Region } from './core/models/region.model';
import { Option } from './core/models/common.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  regions: Option<Region>[] = [
    { label: 'Europe', value: Region.Europe },
    { label: 'Asia', value: Region.Asia },
  ];

  constructor(private store: Store) {}

  ngOnInit() {}

  onSelectRegion(option: Region) {
    this.store.dispatch(loadCountries({ region: option }));
  }
}
