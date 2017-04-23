import { Question } from './question.model';

export class QuestionBatch {

    numberOfQuestions: number;
    questions: Question[] = [];
    batchCategory: string;

    constructor(questions: any[]){
        if(questions && questions.length > 0){
            this.numberOfQuestions = questions.length;
            questions.forEach( item => {
                this.questions.push(new Question(item.category, item.type, item.difficulty, item.question, item.correct_answer, item.incorrect_answers));       
            }); 

            this.batchCategory = this.questions[0].category;
          
        }
    }
}