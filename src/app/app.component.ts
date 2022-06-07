import { Component, OnInit } from '@angular/core';
import { CountryService } from './core/services/country.service';
import { Region } from './core/models/region.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
