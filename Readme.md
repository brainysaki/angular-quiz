# Super Duper Quiz

Super Duper Quiz is an interactive, multiple-choice quiz program to test the user's general knowledge.<br>
The questions, options, and correct answers are stored in `src/assets/quiz-questions.json` which is compiled in to the program.<br>
Question retrieval is mocked out using `http` to facilitate future refactoring to retrieve questions remotely.<br>
Design specifications are included at the bottom of this file under the heading _Original Readme.md file_. 

## Infrastructure and prerequisites

The project is built using Angular (@angular/core 7.2.3).<br>
UI and animations are provided by Angular Material (@angular/material 7.3.1).<br>
It uses Angular Router for routing (@angular/router 7.2.3). <br>
It uses RxJS for reactive extensions (rxjs 6.4.0)

## Workarounds for Stackblitz deployment

The code deployed to stackblitz incorporates workarounds to a known issue where stackblitz does not support local loading of static assets. (see [Stackblitz issue for supporting static assets](https://github.com/stackblitz/core/issues/72)).<br>

The workaround includes: 
* Loading `quiz-questions.json` as a module instead of via `http`.
* Inlining and encoding images with DataURLs in `<img>` tags and CSS `url('')` values. 

These workarounds can be undone when running the application on an unencumbered server, and removed if/when the above stackblitz issue is resolved.<br> 

## Original readme.md file
Please use the following questions to build a simple quiz app. Initial score will be 0, each correct answer should add 1 point to the score, and show the final score once the quiz is completed.

The app should be a single page app, which starts with a welcome screen, click "Start the Quiz" button on the welcome screen to show questions. Only show one question at a time, and each question need to have 4 available options (radio buttons) for user to select. Once user finishes the last question, show the final score.

Question 1: Which is the largest country in the world by population?
Options: India, USA, China, Russia
Correct Answer: China

Question 2: When did the second world war end?
Options: 1945, 1939, 1944, 1942
Correct Answer: 1945

Question 3: Which was the first country to issue paper currency?
Options: USA, France, Italy, China
Correct Answer: China

Question 4: Which city hosted the 1996 Summer Olympics?
Options: Atlanta, Sydney, Athens, Beijing
Correct Answer: Atlanta

Question 5: Who invented telephone?
Options: Albert Einstein, Alexander Graham Bell, Isaac Newton, Marie Curie
Correct Answer: Alexander Graham Bell