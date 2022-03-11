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

  constructor(
    private route: ActivatedRoute,
    private chuckAPI: chuckAPI
  ) {
    route.params.subscribe(routeParams => {
      this.category = routeParams['category']
    })
  }
}
