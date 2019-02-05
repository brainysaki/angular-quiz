import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionComponent } from './quiz-question.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../../core/material.module';
import {QuizQuestionsService} from '../../../shared/quiz-questions.service';
import {HttpClientModule} from '@angular/common/http';

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizQuestionComponent ],
        imports: [FormsModule, MaterialModule, HttpClientModule],
        providers: [QuizQuestionsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
