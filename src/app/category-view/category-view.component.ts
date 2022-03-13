import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { chuckAPI } from './../chuckAPI.service'
import { addPreviousJokes } from './../app.store'
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from "@angular/animations"

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.sass'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        query('li',
        // { optional: true },
        [
          style({
            opacity: 0,
            transform: 'rotateY(120deg)'
          }),
          stagger(100, [
            animate('500ms linear',
            style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class CategoryViewComponent {
  category: string = ''
  jokes: Array<any> = []
  loading: boolean = false
  error: boolean = false
  previousJokes: any = []

  constructor(
    private route: ActivatedRoute,
    private chuckAPI: chuckAPI,
    private store: Store<{ categories: any, previousJokes: any }>
  ) {
    this.previousJokes = store.select('previousJokes')

    route.params.subscribe(routeParams => {
      const category: any = routeParams['category']
      this.category = category
      
      if(category === 'previous-jokes') {
        this.jokes = []
        this.error = false
        this.loading = false
      } else {
        this.loading = true

        Promise.all(new Array(5).fill(null).map(() => this.chuckAPI.getJokeByCategory(category))).then((jokes:any) => {
          this.jokes = jokes
          this.error = false
          this.store.dispatch(addPreviousJokes({jokes}))
        }).catch(err => {
          this.error = true
        }).finally(() => {
          this.loading = false
        })
      }
    })
  }
}
