import { Action } from '@ngrx/store';

export const NEWS_LOAD = '[News] News Load';
export const NEWS_LOAD_SUCCESS = '[News] News Load Success';
export const NEWS_FAILURE = '[News] News Failure';
export const NEWS_ERROR = '[News] News Error';

export class NewsLoad implements Action {
  readonly type = NEWS_LOAD;
  constructor(public payload?: any) {}
}

export class NewsLoadSuccess implements Action {
  readonly type = NEWS_LOAD_SUCCESS;
  constructor(public payload: any) {}
}

export type NewsAction = NewsLoad | NewsLoadSuccess;
