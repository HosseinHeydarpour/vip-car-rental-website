import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials-card',
  templateUrl: './testimonials-card.component.html',
  styleUrl: './testimonials-card.component.scss',
})
export class TestimonialsCardComponent {
  @Input() content: string =
    'Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum.';
}
