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
import { CategoryViewComponent } from './category-view/category-view.component';
import { JokeComponent } from './category-view/joke/joke.component';

const routes: Routes = [
  { path: 'category-view/:category', component: CategoryViewComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IntroScreenComponent,
    CategoriesMenuComponent,
    CategoryComponent,
    CategoryViewComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: categoriesReducer,
      categories: categoriesReducer
    }),
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule {}