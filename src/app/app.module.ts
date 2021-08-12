import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { NewCandidateComponent } from './new-candidate/new-candidate.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CandidateListComponent,
    NewCandidateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
