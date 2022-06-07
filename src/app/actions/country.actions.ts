import { createAction, props } from '@ngrx/store';
import { Region } from '../core/models/region.model';

export const loadCountries = createAction('[Country] Load Countries', props<{ region: Region }>());

export const loadCountriesSuccess = createAction('[Country] Load Countries Success', props<{ data: any }>());

export const loadCountriesFailure = createAction('[Country] Load Countries Failure', props<{ error: any }>());
