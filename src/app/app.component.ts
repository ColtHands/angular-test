import { Component, OnInit, Injectable } from '@angular/core'
import { Store, State } from '@ngrx/store'
import { AppStore } from './app.store'
import { chuckAPI } from './chuckAPI.service'
import { Observable } from 'rxjs';
import { setCategories } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [AppStore]
})
export class AppComponent implements OnInit {
  chuckApi = this.appStore.chuckApi
  categories =  this.store.select('categories')

  constructor(
    private appStore: AppStore,
    private chuckAPI: chuckAPI,
    private store: Store<{ categories: any }>
  ) {}
  
  async ngOnInit() {
    const allCategories: any = await this.chuckAPI.getCategories()
    const randomThreeCategories = allCategories.sort(() => 0.5 - Math.random()).slice(0, 3)
    this.store.dispatch(setCategories({categories: randomThreeCategories}))
    
    // NOTE get three random categories
    // TODO list 5 jokes on each view
    // TODO make three different category design
    // TODO each joke should be represented on a card
    // TODO make a button to list 5 more jokes
    // TODO list all seen jokes below
    // TODO collect already seen jokes into array and display them in a different section

    // TODO responsive, clean, professional design, no bootstrap / uikit
  }
}
