import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project-the-basics';

  activeFeatureName : string = 'recipes';

  onNavigate(event : {eventName: string}){
    this.activeFeatureName = event.eventName;
  }

}
