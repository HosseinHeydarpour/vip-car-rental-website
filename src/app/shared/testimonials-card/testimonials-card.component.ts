import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials-card',
  templateUrl: './testimonials-card.component.html',
  styleUrl: './testimonials-card.component.scss',
})
export class TestimonialsCardComponent {
  @Input() comment: string =
    'Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum.';
  @Input() name: string = 'John Larry';
  @Input() role: string = 'Customer';
  @Input() rating: number = 5;
  @Input() profile: string = 'images/testimonials/1.webp';
}
