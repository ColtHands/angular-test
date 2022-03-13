import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.sass']
})
export class JokeComponent {
  @Input('category') category = ''
}
