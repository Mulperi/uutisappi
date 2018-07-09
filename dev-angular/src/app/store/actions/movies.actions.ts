import { Action } from '@ngrx/store';

export const MOVIES_LOAD = '[Movies] Load';
export const MOVIES_LOAD_SUCCESS = '[Movies] Load Success';
export const MOVIES_FAILURE = '[Movies] Failure';
export const MOVIES_ERROR = '[Movies] Error';

export class MoviesLoad implements Action {
  readonly type = MOVIES_LOAD;
  constructor(public payload?: any) {}
}

export class MoviesLoadSuccess implements Action {
  readonly type = MOVIES_LOAD_SUCCESS;
  constructor(public payload: any) {}
}

export type MoviesAction = MoviesLoad | MoviesLoadSuccess;
