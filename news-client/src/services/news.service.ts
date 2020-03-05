import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { IArticle } from 'src/models/Article';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {

  }

  private articlesSource = new Subject<IArticle[]>();
  selectedArticlesChanges$ = this.articlesSource.asObservable();

  getTopNews(): void {
    this.http.get('http://newsapi.org/v2/top-headlines?country=' + localStorage.getItem('country'))
      .pipe(catchError(this.handleError<any>('getEvents', []))
            , map(result => {
              this.articlesSource.next(result.articles);
            }))
      .subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
