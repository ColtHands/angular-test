import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.sass']
})
export class CategoryViewComponent implements OnInit {
  categories = [
    'category 1',
    'category 2',
    'category 3',
  ]

  ngOnInit(): void {
    console.log(this.categories)
  }
}
