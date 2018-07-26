import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet><spinner></spinner><alert></alert></router-outlet>'
})
export class AppComponent {
  constructor() {}
}