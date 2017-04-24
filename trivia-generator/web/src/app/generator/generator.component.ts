import { Component, Input } from '@angular/core';
import { QuestionBatch } from '../models/question-batch.model';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  batchOfQuestions: QuestionBatch[] = [];

  constructor() { }
}
