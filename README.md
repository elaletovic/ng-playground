# ng-playground #
Work on your Angular skills by completing challenges and building an app.

## Description ##

This is a project that contains unfinished Angular app called Trivia Generator, an app that generates trivia questions and answers. Your goal, once you choose to go along with this exercise, is to complete all challenges and build the rest of the functional requirements. And don't you skip on them unit tests either, because they matter as well :). 

## Requirements ##
//TODO

## List of challenges ##

There are few tweaks and some functionality left to finish. Ok, maybe more than a few. Some are independent of others and some come in bundles. We lost track which are which, but you'll get a hang of it soon enough.

### GeneratorFormComponent ####

These challenges focus mostly on the functionality of an input form for gathering data.

- **Number of Questions** field should be valid only for numbers between 1 and 50, including both of those numbers.
- When form initially loads, form fields should have their respective default values.
- When user clicks on **Submit** button, loader should appear and button and form fields should be disabled until service call is finished.
- Handle all possible variations of mixed default and selected  input values for **QuestionGeneratorService.generateQuestions** method (see [https://opentdb.com](https://opentdb.com "https://opentdb.com") for more details on this API).
- Add error handling in **QuestionGeneratorService.generateQuestions** method.
- Move hardcoded lookup values from component to a new **LookupService** service.

### GeneratorResultsComponent ###

These challenges focus mostly on the functionality of displaying generated data in the **Summary** section.

- When the **Summary** section is empty, show message "There are no generated questions.".
- Add delete button and functionality for each row.
- When maximum 15 rows are generated and shown in the **Summary** section, disable **Submit** button.
- Add **Clear All** button to clear all generated rows in the **Summary** section.

### GeneratedQuizComponent - new functionality ###

This is a completely new functionality that needs to be built. When user clicks on **Generate Quiz** button, generated quiz data from the **Summary** section will be shown in a new component, in a manner of a list of questions and possible answers. There should be a button called **Submit Answers** that will evaluate the provided answers and display results in a separate section. 

- Add **Generate Quiz** button at the bottom of the **Summary** section. When user clicks on it, it will go to state of **GeneratedQuizComponent**, passing the generated quiz data.
- Display questions and answers based on generated quiz data.
- Create sections for displaying number of total, correct, incorrect answers, as well as number of unanswered questions.
- Create **Submit Answers** button and functionality that will check provided answers and calculate number of correct and incorrect answers and unanswered questions.

### Unit Tests ###

Nope, we haven't forgot about unit tests. Currently, none of the unit tests pass. Make them pass, please.

- Make sure that unit tests pass for **AppComponent**.
- Make sure that unit tests pass for **GeneratorComponent**.
- Make sure that unit tests pass for **GeneratorFormComponent**.
- Make sure that unit tests pass for **GeneratorResultsComponent**.
- Make sure that unit tests pass for **GeneratedQuizComponent**.
- Make sure that unit tests pass for **QuestionGeneratorService**.

