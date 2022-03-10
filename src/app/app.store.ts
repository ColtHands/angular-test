import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store'

export interface AppStateModel {
    categories: Array<string>
}

@Injectable()
export class AppStore extends ComponentStore<AppStateModel> {
    // readonly categories = this.select(({ categories }) => categories);

    // constructor() {
    //     super({
    //         categories: []
    //     })
    // }

    chuckApi = 'https://api.chucknorris.io'

    get chuckApiCategoriesUrl() { return `${this.chuckApi}/jokes/categories`}
}