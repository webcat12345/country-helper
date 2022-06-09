import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailsComponent } from './country-details/country-details.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CountryDetailsComponent],
})
export class CountryModule {}
