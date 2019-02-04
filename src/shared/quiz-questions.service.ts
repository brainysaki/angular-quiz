import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {QuizQuestion} from '../features/quiz/quiz-question/quiz-question.model';
import {Observable} from 'rxjs';

@Injectable()
export class QuizQuestionsService {
    constructor(private http: HttpClient) {
        // this.getJSON().subscribe(data => {
        //     console.log(data)
        // });
    }

    public getQuestions(): Observable<any> {
        return this.http.get('./assets/quiz-questions.json');
    }
}
