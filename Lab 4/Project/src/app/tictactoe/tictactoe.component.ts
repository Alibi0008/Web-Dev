import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="board">
      <div
        class="cell"
        *ngFor="let cell of board; let i = index"
        (click)="makeMove(i)">
        {{ cell }}
      </div>
    </div>
    <div class="info">
      <p *ngIf="winner">Победитель: {{ winner }}</p>
      <p *ngIf="!winner && isDraw()">Ничья!</p>
      <p *ngIf="!winner && !isDraw()">Ход: {{ currentPlayer }}</p>
      <button (click)="resetGame()">Начать заново</button>
    </div>
  `,
  styles: [`
    .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 5px;
      justify-content: center;
      margin-bottom: 20px;
    }
    .cell {
      width: 100px;
      height: 100px;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
      cursor: pointer;
      border: 1px solid #ccc;
    }
    .info {
      text-align: center;
    }
    button {
      margin-top: 10px;
      padding: 5px 10px;
    }
  `]
})
export class TicTacToeComponent {
  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;

  makeMove(index: number): void {
    if (this.board[index] === '' && !this.winner) {
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const winningCombinations = [
      [0,1,2], [3,4,5], [6,7,8], // ряды
      [0,3,6], [1,4,7], [2,5,8], // столбцы
      [0,4,8], [2,4,6]           // диагонали
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return true;
      }
    }
    return false;
  }

  isDraw(): boolean {
    return this.board.every(cell => cell !== '') && !this.winner;
  }

  resetGame(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
