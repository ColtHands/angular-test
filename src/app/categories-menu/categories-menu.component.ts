import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.sass'],
})
export class CategoriesMenuComponent implements OnInit {
  categories =  this.store.select('categories')
  
  constructor(private readonly store: Store<{ categories: string[] }>) {}

  ngOnInit(): void {
  }

}
