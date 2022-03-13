import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { categoriesReducer } from './app.store'
import { Routes, RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppStore } from './app.store'
import { AppComponent } from './app.component'
import { IntroScreenComponent } from './intro-screen/intro-screen.component'
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component'
import { CategoryComponent } from './categories-menu/category/category.component'
import { CategoryViewComponent } from './category-view/category-view.component'
import { JokeComponent } from './category-view/joke/joke.component'
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component'
import { MenuButtonComponent } from './ui/menu-button/menu-button.component'

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
    JokeComponent,
    LoadingSpinnerComponent,
    MenuButtonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      categories: categoriesReducer
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule {}