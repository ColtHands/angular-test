import { Component, OnInit } from '@angular/core';
import { chuckAPI } from './../chuckAPI.service'
@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.sass'],
  host: { '(click)': 'onClick()'}
})
export class RandomJokeComponent implements OnInit {
  randomJoke:any = {}

  constructor(
    private chuckAPI: chuckAPI
  ) {}

  private onClick() {
    this.generateNewRandomJoke()
  }

  generateNewRandomJoke() {
    this.chuckAPI.getRandomJoke().then((res:any) => {
      this.randomJoke = res
    })
  }

  ngOnInit(): void {
    this.generateNewRandomJoke()
  }
}
