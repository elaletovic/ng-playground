import { Component, Input } from '@angular/core';
import { Lookup } from '../../models/lookup.model';
import { QuestionBatch } from '../../models/question-batch.model';
import { Response } from '@angular/http';

import { QuestionGeneratorService } from './question-generator.service';

@Component({
  selector: 'generator-form',
  templateUrl: './generator-form.component.html',
  styleUrls: ['./generator-form.component.css']
})
export class GeneratorFormComponent {

  categories: Lookup[] = [
    new Lookup("any", "Any Lookup"),
    new Lookup("9", "General Knowledge"),
    new Lookup("10", "Entertainment: Books"),
    new Lookup("11", "Entertainment: Film"),
    new Lookup("12", "Entertainment: Music"),
    new Lookup("13", "Entertainment: Musicals and Theaters"),
    new Lookup("14", "Entertainment: Television"),
    new Lookup("15", "Entertainment: Video Games"),
    new Lookup("16", "Entertainment: Board Games"),
    new Lookup("17", "Science & Nature"),
    new Lookup("18", "Science: Computers"),
    new Lookup("19", "Science: Mathematics"),
    new Lookup("20", "Mythology"),
    new Lookup("21", "Sports"),
    new Lookup("22", "Geography"),
    new Lookup("23", "History"),
    new Lookup("24", "Politics"),
    new Lookup("25", "Art"),
    new Lookup("26", "Celebrities"),
    new Lookup("27", "Animals"),
    new Lookup("28", "Vehicles"),
    new Lookup("29", "Entertainment: Comics"),
    new Lookup("30", "Science: Gadgets"),
    new Lookup("31", "Entertainment: Japanese Anime & Manga"),
    new Lookup("32", "Entertainment: Cartoon & Animations"),
  ];

  difficulties: Lookup[] = [
    new Lookup("any", "Any Difficulty"),
    new Lookup("easy", "Easy"),
    new Lookup("medium", "Medium"),
    new Lookup("hard", "Hard")
  ];

  types: Lookup[] = [
    new Lookup("any", "Any Type"),
    new Lookup("multiple", "Multiple Choice"),
    new Lookup("boolean", "True / False")
  ];

  encodings: Lookup[] = [
    new Lookup("default", "Default Encoding"),
    new Lookup("urlLegacy", "Legacy URL Encoding"),
    new Lookup("url3986", "URL Encoding (RFC 3986)"),
    new Lookup("base64", "Base64 Encoding")
  ];

  //input field
  @Input() batch: QuestionBatch[];

  constructor(private questionGenService: QuestionGeneratorService) { }

  onSubmit(generatorForm: any): void {
    if(generatorForm){
      console.log(generatorForm);

      this.questionGenService.generateQuestions(generatorForm.form.controls.numberOfQuestions.value, generatorForm.form.controls.category.value,
      generatorForm.form.controls.difficulty.value, generatorForm.form.controls.type.value, generatorForm.form.controls.encoding.value)
      .subscribe((response: any) => {
        console.log(response);
        
        if(response && response.results && response.results.length > 0)
        {
          this.batch.push(new QuestionBatch(response.results));
        }
      });

    }
  }

}
