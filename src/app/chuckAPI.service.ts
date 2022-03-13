import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AppStore } from './app.store'

@Injectable({
  providedIn: 'root'
})
export class chuckAPI {
  constructor(
    private http: HttpClient,
    private appStore: AppStore
  ) {}

  getCategories() {
    return this.http.get(this.appStore.chuckApiCategoriesUrl).toPromise()
  }

  getJokeByCategory(category: string) {
    return this.http.get(`${this.appStore.chuckApi}/jokes/random?category=${category}`).toPromise()
  }

  getRandomJoke(){
    return this.http.get(`${this.appStore.chuckApi}/jokes/random`).toPromise()
  }
}
