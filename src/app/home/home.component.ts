import { Component, OnInit } from '@angular/core';
import {QuotesService} from '../quotes.service';
import {Observable} from 'rxjs';
import {Quote} from '../quotes/quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: Observable<Quote>;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quote = this.quotesService.getQuote('5de2fdffef439b077c0849a1');
  }

}
