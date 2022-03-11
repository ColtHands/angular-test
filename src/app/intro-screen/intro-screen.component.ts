import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-intro-screen',
  templateUrl: './intro-screen.component.html',
  styleUrls: ['./intro-screen.component.sass']
})
export class IntroScreenComponent {

  constructor(
    private router: Router
  ) {}

  redirectMain(){
    this.router.navigate(['/'])
  }
}
