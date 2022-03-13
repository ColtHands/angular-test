import { Component, OnInit, Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
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
  }
}
