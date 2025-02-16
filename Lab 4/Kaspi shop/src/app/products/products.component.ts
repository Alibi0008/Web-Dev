import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    // ----- iPhone -----
    {
      name: 'iPhone 11 64Gb Slim Box черный',
      description: ' Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу. ',
      rating: 4.7,
      image: 'assets/iPhone-11-64Gb.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000'
    },
    {
      name: 'iPhone 13 128Gb зеленый',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей',
      rating: 4.8,
      image: 'assets/iPhone-13-128Gb.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000'
    },
    {
      name: 'iPhone 14 128Gb голубой',
      description: 'Apple iPhone 14 – компактная модель с безрамочным дисплеем OLED 6.1 дюйма.',
      rating: 4.9,
      image: 'assets/iPhone-14-128Gb.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000'
    },
    {
      name: 'iPhone 15 Pro Max 256Gb серый',
      description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана.',
      rating: 5.0,
      image: 'assets/iPhone-15-Pro-Max.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
    },
    {
      name: 'iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
      rating: 4.9,
      image: 'assets/iPhone-16-128Gb.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },

    // ----- Samsung -----
    {
      name: 'Samsung Galaxy S24 Ultra 5G 12 ГБ 256 ГБ черный',
      description: 'Мощный флагман с ярким дисплеем и продвинутой камерой, поддерживающий 5G.',
      rating: 5.0,
      image: 'assets/Samsung-S24-Ultra.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A25 5G 6 ГБ 128 ГБ темно-синий',
      description: 'Galaxy A25 остается схожим с предыдущими моделями: это отдельные объективы камеры и плоская пластиковая задняя панель',
      rating: 4.7,
      image: 'assets/Samsung-A25.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A06 4 ГБ 64 ГБ черный',
      description: 'Доступная модель с надёжной производительностью и ёмкой батареей для комфортного использования каждый день.',
      rating: 4.5,
      image: 'assets/Samsung-A06.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a06-4-gb-64-gb-chernyi-123156529/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A35 5G 8 ГБ 256 ГБ сиреневый',
      description: 'Новый Samsung Galaxy A35 – это смартфон средней ценовой категории.',
      rating: 4.6,
      image: 'assets/Samsung-A35.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-sirenevyi-117420466/?c=750000000'
    },
    {
      name: 'Samsung Galaxy S24 FE 5G 8 ГБ 256 ГБ черный',
      description: 'Производительный смартфон с поддержкой 5G, большим объёмом памяти и мощной камерой для комфортных повседневных задач.',
      rating: 4.8,
      image: 'assets/Samsung-S24-FE.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000'
    },
  ];

  buyProduct(product: any) {
    alert(`Вы купили: ${product.name}`);
  }

  getWhatsAppLink(product: any): string {
    const message = `Check this out: ${product.name} - ${product.link}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  }

  getTelegramLink(product: any): string {
    const message = `Check this out: ${product.name} - ${product.link}`;
    return `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
  }
}
