import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { chuckAPI } from './../chuckAPI.service'

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.sass']
})
export class CategoryViewComponent {
  category: string = ''
  jokes: any = []
  loading: boolean = false

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
      }).catch(err => {
        console.log('error', err)
      }).finally(() => {
        this.loading = false
      })
    })
  }
}
