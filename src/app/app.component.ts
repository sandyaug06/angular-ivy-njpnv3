import { Component, VERSION } from '@angular/core';
import { CandidateService } from './candidate-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CandidateService]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
