import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store'

export interface AppStateModel {
    chuckApi: string
}

@Injectable()
export class AppStore extends ComponentStore<AppStateModel> {
    // readonly chuckApi = this.select(({ chuckApi }) => chuckApi);

    // constructor() {
    //     super({
    //         chuckApi: 'https://api.chucknorris.io'
    //     })
    // }

    chuckApi = 'https://api.chucknorris.io'
}