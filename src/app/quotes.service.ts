import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quote} from './quotes/quote';
import {environment} from '../environments/environment';
import {tap} from 'rxjs/operators';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Quote[]> {
    return this.http.get<Quote[]>(`${baseUrl}/quotes`);
  }

  getQuote(id: string): Observable<Quote> {
    return this.http.get<Quote>(`${baseUrl}/quotes/${id}`).pipe(
      tap((data) => {
        console.log('Quotes', data);
      })
    );
  }

  createQuote(quote: Quote): Observable<Quote> {
      return this.http.post<Quote>(`${baseUrl}/quotes`, quote);
  }

  updateQuote(id: string, quote: Quote): Observable<Quote> {
    return this.http.put<Quote>(`${baseUrl}/quotes/${id}`, quote);
  }

  deleteQuote(id: string) {
    return this.http.delete(`${baseUrl}/quotes/${id}`);
  }
}
