import { Component, Input } from '@angular/core';

interface Joke {
  value: string,
  created_at: string,
  icon_url: string,
  id: string,
  updated_at: string,
  url: string
}

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.sass']
})
export class JokeComponent {
  @Input('joke') joke:Joke
  constructor() {}
}
