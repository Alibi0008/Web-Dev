// import { Component } from '@angular/core';
// import { TicTacToeComponent } from './tictactoe/tictactoe.component';
//
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [TicTacToeComponent],
//   template: `
//     <h1 style="text-align: center; margin: 20px;">Игра «Крестики-нолики»</h1>
//     <app-tictactoe></app-tictactoe>
//   `,
//   styles: []
// })
// export class AppComponent {}
import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizComponent],
  template: `
    <h1 style="text-align: center; margin: 20px;">Quiz App</h1>
    <app-quiz></app-quiz>
  `,
  styles: []
})
export class AppComponent {}
