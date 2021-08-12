import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate-service.service';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.css']
})
export class NewCandidateComponent implements OnInit {
  public id: number = 10;
  public first_name: string = '';
  public last_name: string = '';
  public email: string = '';
  public male: string = '';
  public female: string = '';

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    console.log('called');
  }

  public addCondidate() {
    console.log(this.male + ' , ' + this.female);
    this.id = this.candidateService.getCandidates().length + 1;

    this.candidateService.addCandidate({
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      gender: this.male === 'true' ? 'Male' : 'Female'
    });
  }
}
