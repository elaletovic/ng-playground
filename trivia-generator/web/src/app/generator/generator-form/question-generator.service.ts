import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';

@Injectable()
export class QuestionGeneratorService {

  constructor(private http: Http) { }

  generateQuestions(amount: string, category: string, difficulty: string, type: string, encoding: string): Observable<any> {
      let url: string = `https://opentdb.com/api.php?${amount ? "amount=" + amount + "&" : ""}${category ? "category=" + category + "&" : ""}
      ${difficulty ? "difficulty=" + difficulty + "&" : ""}${type ? "type=" + type + "&" : ""}${encoding ? "encoding=" + encoding : ""}`;
      url = url[url.length - 1] == "&" ? url.substring(0, url.length - 1) : url ;
      
      return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
