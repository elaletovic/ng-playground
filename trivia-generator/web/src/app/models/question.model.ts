export class Question{
    constructor(public category: string, public type: string, public difficulty: string, public question: string,
                public correctAnswer: string, public incorrectAnswers: string[]){

                }
}