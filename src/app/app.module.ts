import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { categoriesReducer } from './app.store';
import { Routes, RouterModule } from '@angular/router';

import { AppStore } from './app.store'
import { AppComponent } from './app.component'
import { IntroScreenComponent } from './intro-screen/intro-screen.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { CategoryComponent } from './categories-menu/category/category.component';

const routes: Routes = [
  { path: 'category-view', component: CategoryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IntroScreenComponent,
    CategoriesMenuComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: categoriesReducer,
      categories: categoriesReducer
    }),
    HttpClientModule,
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule {}