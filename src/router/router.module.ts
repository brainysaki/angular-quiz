import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizQuestionComponent} from '../features/quiz/quiz-question/quiz-question.component';
import {HomeComponent} from '../app/home/home.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'quiz-question', component: QuizQuestionComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
