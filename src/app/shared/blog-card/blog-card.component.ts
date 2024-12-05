import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  showArrow: boolean = false;

  @Input() title: string;
  @Input() category: string;
  @Input() date: {
    day: string;
    month: string;
  };

  @Input() blogImage: string;

  onHover() {
    this.showArrow = !this.showArrow;
  }
}
