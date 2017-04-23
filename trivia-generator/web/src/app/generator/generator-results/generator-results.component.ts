import { Component, Input } from '@angular/core';

import { QuestionBatch } from '../../models/question-batch.model';

@Component({
  selector: 'generator-results',
  templateUrl: './generator-results.component.html',
  styleUrls: ['./generator-results.component.css']
})
export class GeneratorResultsComponent {

//input field
  @Input() batch: QuestionBatch[];
  constructor() { }

  ngOnInit() {
  }

}
