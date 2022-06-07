import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class CountryEffects {
  constructor(private actions$: Actions) {}
}
