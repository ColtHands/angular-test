import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store'

@Injectable()
export class AppStore extends ComponentStore<any> {

    

    chuckApi = 'https://api.chucknorris.io'
    get chuckApiCategoriesUrl() { return `${this.chuckApi}/jokes/categories`}
}