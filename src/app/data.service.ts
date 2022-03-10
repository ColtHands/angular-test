import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AppStore } from './app.store'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
    private appStore: AppStore
  ) {}

  getCategories() {
    return this.http.get(this.appStore.chuckApiCategoriesUrl).toPromise()
  }
}
