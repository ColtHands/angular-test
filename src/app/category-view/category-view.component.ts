import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { chuckAPI } from './../chuckAPI.service'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.sass']
})
export class CategoryViewComponent {
  category: string = ''
  jokes: any = []
  loading: boolean = false
  error: boolean = false

  constructor(
    private route: ActivatedRoute,
    private chuckAPI: chuckAPI
  ) {
    route.params.subscribe(routeParams => {
      this.loading = true
      const category: any = routeParams['category']
      this.category = category

      Promise.all(new Array(5).fill(null).map(() => this.chuckAPI.getJokeByCategory(category))).then(jokes => {
        this.jokes = jokes
        this.error = false
      }).catch(err => {
        this.error = true
      }).finally(() => {
        this.loading = false
      })
    })
  }
}
