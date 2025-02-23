import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="sidebar">
      <ul>
        <li>
          <button class="main-button" (click)="toggleCategories()">Categories</button>
          <ul *ngIf="showCategories" [@slideDown] class="category-list">
            <li><button (click)="selectCategory('All')">All</button></li>
            <li><button (click)="selectCategory('Apple')">Apple</button></li>
            <li><button (click)="selectCategory('Samsung')">Samsung</button></li>
            <li><button (click)="selectCategory('Xiaomi')">Xiaomi</button></li>
            <li><button (click)="selectCategory('OPPO')">OPPO</button></li>
          </ul>
        </li>
      </ul>
    </nav>
  `,
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('250ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ],
  styles: [`
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 220px;
      background: linear-gradient(135deg, #2c3e50, #4ca1af);
      padding: 20px;
      box-shadow: 2px 0 12px rgba(0, 0, 0, 0.4);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #ecf0f1;
    }
    .sidebar ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .sidebar li {
      margin-bottom: 20px;
    }
    .main-button {
      width: 100%;
      padding: 12px 16px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 4px;
      color: #ecf0f1;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
    }
    .main-button:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    .category-list {
      margin-top: 10px;
      padding-left: 10px;
      border-left: 2px solid #ecf0f1;
    }
    .category-list li {
      margin: 10px 0;
    }
    .category-list button {
      width: 100%;
      padding: 8px 12px;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      border-radius: 4px;
      color: #ecf0f1;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .category-list button:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class SidebarComponent {
  showCategories = false;

  @Output() categorySelected = new EventEmitter<string>();

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
