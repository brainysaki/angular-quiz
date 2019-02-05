import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {MaterialModule} from '../../core/material.module';
import {appRoutes} from '../../router/router.module';
import {RouterTestingModule} from '@angular/router/testing';
import {QuizQuestionComponent} from '../../features/quiz/quiz-question/quiz-question.component';
import {FormsModule} from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, QuizQuestionComponent ],
      imports: [FormsModule, MaterialModule, RouterTestingModule.withRoutes(appRoutes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
