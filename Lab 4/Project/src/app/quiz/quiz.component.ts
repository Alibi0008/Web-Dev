import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!quizFinished">
      <h2>Вопрос {{ currentQuestionIndex + 1 }} из {{ questions.length }}</h2>
      <p>{{ currentQuestion.question }}</p>
      <ul>
        <li *ngFor="let option of currentQuestion.options; let i = index">
          <button [disabled]="answerSelected" (click)="selectAnswer(i)">
            {{ option }}
          </button>
        </li>
      </ul>
      <div *ngIf="answerSelected">
        <p [ngStyle]="{'color': selectedAnswer === currentQuestion.correctIndex ? 'green' : 'red'}">
          {{ selectedAnswer === currentQuestion.correctIndex ? 'Верно!' : 'Неверно!' }}
        </p>
        <button (click)="nextQuestion()">Следующий вопрос</button>
      </div>
    </div>
    <div *ngIf="quizFinished">
      <h2>Тест завершён!</h2>
      <p>Ваш результат: {{ score }} из {{ questions.length }}</p>
      <button (click)="resetQuiz()">Начать заново</button>
    </div>
  `,
  styles: [`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
    button {
      padding: 10px;
      font-size: 1em;
      cursor: pointer;
    }
  `]
})
export class QuizComponent {
  questions: Question[] = [
    {
      question: 'Какова столица Франции?',
      options: ['Берлин', 'Мадрид', 'Париж', 'Лиссабон'],
      correctIndex: 2,
    },
    {
      question: 'Кто написал "Гамлета"?',
      options: ['Чарльз Диккенс', 'Уильям Шекспир', 'Лев Толстой', 'Марк Твен'],
      correctIndex: 1,
    },
    {
      question: 'Какой химический символ у воды?',
      options: ['O₂', 'H₂O', 'CO₂', 'NaCl'],
      correctIndex: 1,
    },
    {
      question: 'Какая планета называется Красной планетой?',
      options: ['Земля', 'Марс', 'Юпитер', 'Венера'],
      correctIndex: 1,
    }
  ];

  currentQuestionIndex: number = 0;
  score: number = 0;
  answerSelected: boolean = false;
  selectedAnswer: number | null = null;
  quizFinished: boolean = false;

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  selectAnswer(index: number): void {
    if (!this.answerSelected) {
      this.selectedAnswer = index;
      this.answerSelected = true;
      if (index === this.currentQuestion.correctIndex) {
        this.score++;
      }
    }
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.quizFinished = true;
    } else {
      this.answerSelected = false;
      this.selectedAnswer = null;
    }
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.answerSelected = false;
    this.selectedAnswer = null;
    this.quizFinished = false;
  }
}
