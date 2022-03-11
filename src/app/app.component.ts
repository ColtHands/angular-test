import { Component, OnInit, Injectable } from '@angular/core'
import { Store, State } from '@ngrx/store'
import { AppStore } from './app.store'
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [AppStore]
})
export class AppComponent implements OnInit {
  chuckApi = this.appStore.chuckApi
  randomThreeCategories = []

  constructor(
    private appStore: AppStore,
    private dataService: DataService
  ) {}

  async ngOnInit() {
    console.log('this.appStore.chuchApi3', this.appStore.chuckApi)
    const allCategories: any = await this.dataService.getCategories()
    
    this.randomThreeCategories = allCategories.sort(() => 0.5 - Math.random()).slice(0, 3)

    console.log('randomThreeCategories', this.randomThreeCategories)
    
    // TODO get three random categories
    // TODO make three different category design
    // TODO list 5 jokes on each view
    // TODO each joke should be represented on a card
    // TODO make a button to list 5 more jokes
    // TODO list all seen jokes below
    // TODO collect already seen jokes into array and display them in a different section

    // TODO responsive, clean, professional design, no bootstrap / uikit
  }
}
