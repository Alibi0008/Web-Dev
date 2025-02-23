import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-sidebar (categorySelected)="onCategorySelected($event)"></app-sidebar>
    <div class="content">
      <!-- Передаём выбранную категорию -->
      <app-products [selectedCategory]="selectedCategory"></app-products>
    </div>
  `,
  imports: [SidebarComponent, ProductsComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: string | null = null;

  onCategorySelected(category: string) {
    this.selectedCategory = category ? category : null;
  }
}
