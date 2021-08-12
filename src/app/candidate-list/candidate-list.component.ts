import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate-service.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: 'candidate-list.component.html',
  styleUrls: ['candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  public candidates: Candidate[];

  constructor(private candidateService: CandidateService) {
    console.log(this.candidateService.getCandidates());
  }

  ngOnInit() {
    console.log(this.candidateService.getCandidates());
    this.candidates = this.candidateService.getCandidates();
  }
}
