import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
// import { StoreModule, createReducer } from '@ngrx/store'
// import { EntityDataModule } from '@ngrx/data'
// import { EffectsModule } from '@ngrx/effects'
// import { createSelector } from '@ngrx/store'

import { AppStore } from './app.store'
import { AppComponent } from './app.component'
import { CategoryViewComponent } from './category-view/category-view.component'
import { CategoryComponent } from './category/category.component'


@NgModule({
  declarations: [
    AppComponent,
    CategoryViewComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule {}