import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store'
import { createReducer, on } from '@ngrx/store';
import { createAction, props } from '@ngrx/store'

interface AppStoreModel {
  categories: Array<string>
}

@Injectable()
export class AppStore extends ComponentStore<AppStoreModel> {
  chuckApi = 'https://api.chucknorris.io'
  get chuckApiCategoriesUrl() { return `${this.chuckApi}/jokes/categories`}
}

export const categories = [];

export const setCategories = createAction('SET_CATEGORIES', props<{categories: string[]}>())

export function categoriesReducer(state: any, action: any) {
  return createReducer(
    categories,
    on(setCategories, (state, payload: any) => state = payload.categories)
  )(state, action)
}