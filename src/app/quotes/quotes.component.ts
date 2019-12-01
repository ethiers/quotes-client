import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuotesService} from '../quotes.service';
import {Observable, Subscription} from 'rxjs';
import {Quote} from './quote';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit, OnDestroy {

  quotes: Observable<Quote[]>;
  // private subscription: Subscription;

  constructor(private quotesService: QuotesService) {
  }

  ngOnInit() {
    // this.subscription = this.quotesService.getData().subscribe((data) => {
    //   console.log(data);
    //   this.quotes = data;
    // });

    // this.quotes = this.quotesService.getData().pipe(
    //   tap(data => console.log('Quotes', data))
    // );

    this.getData();
  }

  getData() {
    this.quotes = this.quotesService.getData().pipe(
      tap(data => console.log('Quotes', data))
    );
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return {background: color};
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  onDelete(id: string) {
    console.log(id);
    this.quotesService.deleteQuote(id).subscribe(data => {
      this.getData();
      console.log('Quote Deleted!');
    });
  }
}
