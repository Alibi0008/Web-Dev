import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // <-- Добавляем декоратор @Input(), чтобы принимать выбранную категорию
  @Input() selectedCategory: string | null = null;

  products = [
    // ----- iPhone -----
    {
      category: 'Apple',
      name: 'iPhone 11 64Gb Slim Box черный',
      description: 'Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.',
      rating: 4.7,
      image: 'assets/iPhone-11-64Gb.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000',
      likes: 0,
    },
    {
      category: 'Apple',
      name: 'iPhone 13 128Gb зеленый',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей.',
      rating: 4.8,
      image: 'assets/iPhone-13-128Gb.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000',
      likes: 0,
    },
    {
      category: 'Apple',
      name: 'iPhone 14 128Gb голубой',
      description: 'Apple iPhone 14 – компактная модель с безрамочным дисплеем OLED 6.1 дюйма.',
      rating: 4.9,
      image: 'assets/iPhone-14-128Gb.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000',
      likes: 0,
    },
    {
      category: 'Apple',
      name: 'iPhone 15 Pro Max 256Gb серый',
      description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана.',
      rating: 5.0,
      image: 'assets/iPhone-15-Pro-Max.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
      likes: 0,
    },
    {
      category: 'Apple',
      name: 'iPhone 16 128Gb черный',
      description: 'iPhone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
      rating: 4.9,
      image: 'assets/iPhone-16-128Gb.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
      likes: 0,
    },

    // ----- Samsung -----
    {
      category: 'Samsung',
      name: 'Samsung Galaxy S24 Ultra 5G 12 ГБ 256 ГБ черный',
      description: 'Мощный флагман с ярким дисплеем и продвинутой камерой, поддерживающий 5G.',
      rating: 5.0,
      image: 'assets/Samsung-S24-Ultra.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000',
      likes: 0,
    },
    {
      category: 'Samsung',
      name: 'Samsung Galaxy A25 5G 6 ГБ 128 ГБ темно-синий',
      description: 'Galaxy A25 остается схожим с предыдущими моделями: это отдельные объективы камеры и плоская пластиковая задняя панель.',
      rating: 4.7,
      image: 'assets/Samsung-A25.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000',
      likes: 0,
    },
    {
      category: 'Samsung',
      name: 'Samsung Galaxy A06 4 ГБ 64 ГБ черный',
      description: 'Доступная модель с надёжной производительностью и ёмкой батареей для комфортного использования каждый день.',
      rating: 4.5,
      image: 'assets/Samsung-A06.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a06-4-gb-64-gb-chernyi-123156529/?c=750000000',
      likes: 0,
    },
    {
      category: 'Samsung',
      name: 'Samsung Galaxy A35 5G 8 ГБ 256 ГБ сиреневый',
      description: 'Новый Samsung Galaxy A35 – это смартфон средней ценовой категории.',
      rating: 4.6,
      image: 'assets/Samsung-A35.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-sirenevyi-117420466/?c=750000000',
      likes: 0,
    },
    {
      category: 'Samsung',
      name: 'Samsung Galaxy S24 FE 5G 8 ГБ 256 ГБ черный',
      description: 'Производительный смартфон с поддержкой 5G, большим объёмом памяти и мощной камерой для комфортных повседневных задач.',
      rating: 4.8,
      image: 'assets/Samsung-S24-FE.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000',
      likes: 0,
    },

    // ----- Xiaomi -----
    {
      category: 'Xiaomi',
      name: 'Xiaomi Redmi 13C 8 ГБ 256 ГБ черный',
      description: 'Новый бюджетный смартфон с большим объёмом памяти и ёмким аккумулятором.',
      rating: 4.7,
      image: 'assets/Xiaomi-Redmi-13C.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
      likes: 0,
    },
    {
      category: 'Xiaomi',
      name: 'Xiaomi Redmi Note 13 Pro 5G 12 ГБ 512 ГБ черный',
      description: 'Продвинутая модель Redmi Note серии с поддержкой 5G и быстрой зарядкой.',
      rating: 4.9,
      image: 'assets/Xiaomi-Redmi-Note-13-Pro-5G.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-12-gb-512-gb-chernyi-115939564/?c=750000000',
      likes: 0,
    },
    {
      category: 'Xiaomi',
      name: 'Xiaomi Redmi A3 4 ГБ 128 ГБ черный',
      description: 'Надёжная модель начального уровня с большим объёмом памяти и приятным дизайном.',
      rating: 4.5,
      image: 'assets/Xiaomi-Redmi-A3.jpeg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-a3-4-gb-128-gb-chernyi-116932148/?c=750000000',
      likes: 0,
    },
    {
      category: 'Xiaomi',
      name: 'Xiaomi 14T 12 ГБ 512 ГБ черный',
      description: 'Смартфон с высокой производительностью, AMOLED-дисплеем и быстрой зарядкой.',
      rating: 4.8,
      image: 'assets/Xiaomi-14T.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-14t-12-gb-512-gb-chernyi-129059964/?c=750000000',
      likes: 0,
    },
    {
      category: 'Xiaomi',
      name: 'Xiaomi 13 Ultra 5G 16 ГБ 1024 ГБ белый',
      description: 'Флагманский смартфон Xiaomi с премиальной камерой и большим объёмом памяти.',
      rating: 5.0,
      image: 'assets/Xiaomi-13-Ultra-5G.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-13-ultra-5g-16-gb-1024-gb-belyi-110918021/?c=750000000',
      likes: 0,
    },

    // ----- OPPO -----
    {
      category: 'OPPO',
      name: 'OPPO Reno11 F 5G 8 ГБ 256 ГБ зеленый',
      description: 'OPPO Reno11 F 5G — сочетание элегантного дизайна и мощной аппаратной начинки для быстрого доступа к сетям 5G.',
      rating: 4.8,
      image: 'assets/OPPO-Reno11-F.jpeg',
      link: 'https://kaspi.kz/shop/p/oppo-reno11-f-5g-8-gb-256-gb-zelenyi-118321377/?c=750000000',
      likes: 0,
    },
    {
      category: 'OPPO',
      name: 'OPPO Reno12F 8 ГБ 256 ГБ серый',
      description: 'Стильный смартфон с широким функционалом камеры и быстрой зарядкой, сохраняя тонкий и лёгкий корпус.',
      rating: 4.7,
      image: 'assets/OPPO-Reno12F.jpg',
      link: 'https://kaspi.kz/shop/p/oppo-reno12f-8-gb-256-gb-seryi-122178409/?c=750000000',
      likes: 0,
    },
    {
      category: 'OPPO',
      name: 'OPPO A78 8 ГБ 256 ГБ зеленый',
      description: 'Доступная модель с большим объёмом памяти и надёжной производительностью в стильном корпусе.',
      rating: 4.5,
      image: 'assets/OPPO-A78.jpg',
      link: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-zelenyi-112809322/?c=750000000',
      likes: 0,
    },
    {
      category: 'OPPO',
      name: 'OPPO Reno 10 Pro 5G 12 ГБ 256 ГБ серый',
      description: 'Флагманская модель с мощным процессором, великолепной камерой и поддержкой 5G.',
      rating: 4.9,
      image: 'assets/OPPO-Reno-10-Pro.jpeg',
      link: 'https://kaspi.kz/shop/p/oppo-reno-10-pro-5g-12-gb-256-gb-seryi-112353448/?c=750000000',
      likes: 0,
    },
    {
      category: 'OPPO',
      name: 'OPPO Reno13 5G 12 ГБ 512 ГБ синий',
      description: 'Новая версия Reno13 с большим объёмом памяти, улучшенной камерой и поддержкой сетей пятого поколения.',
      rating: 5.0,
      image: 'assets/OPPO-Reno13.jpg',
      link: 'https://kaspi.kz/shop/p/oppo-reno13-5g-12-gb-512-gb-sinii-133892765/?c=750000000',
      likes: 0,
    }
  ];

  // Getter to filter products by selected category
  get filteredProducts() {
    if (!this.selectedCategory || this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(
      product => product.category === this.selectedCategory
    );
  }

  // Increments the likes count for a product
  addLike(product: any): void {
    product.likes++;
  }

  // Methods for sharing (if needed)
  getWhatsAppLink(product: any): string {
    const message = `Check this out: ${product.name} - ${product.link}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  }

  getTelegramLink(product: any): string {
    const message = `Check this out: ${product.name} - ${product.link}`;
    return `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
  }
}
