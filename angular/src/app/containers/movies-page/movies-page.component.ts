import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromMovies from '../../store/selectors/movies.selectors';
import * as moviesActions from '../../store/actions/movies.actions';
@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies$: Observable<any>;
  loadingMovies$: Observable<any>;
  constructor(private store: Store<fromStore.State>) {}

  ngOnInit(): void {
    this.movies$ = this.store.select(fromMovies.getMovies);
    this.loadingMovies$ = this.store.select(fromMovies.getLoading);
  }
}
