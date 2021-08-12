import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate-service.service';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.css']
})
export class NewCandidateComponent implements OnInit {
  id: number = 10;
  first_name: string;
  last_name: string;
  email: string;
  male: string;
  female: string;

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {}

  addCandidate() {
    console.log(this.male + ' ' + this.female);
    this.candidateService.candidateAdd.emit({
      id: this.id++,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      gender: ''
    });
  }
}
