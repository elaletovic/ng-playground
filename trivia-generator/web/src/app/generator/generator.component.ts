import { Component, OnInit, Input } from '@angular/core';
import { QuestionBatch } from '../models/question-batch.model';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  batchOfQuestions: QuestionBatch[] = [];

  constructor() { }

  ngOnInit() {
  }

}
