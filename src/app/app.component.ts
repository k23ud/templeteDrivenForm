import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  log(courses: any) {
    console.log(courses);
  }

  category = [
    "Development",
    "Art",
    "Languages"
  ];

}
