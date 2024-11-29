import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
})
export class CarCardComponent {
  @Input() imagePath: string = '';
  @Input() imageAlt: string = '';
  @Input() carName: string = '';
  @Input() carSeats: number = 0;
  @Input() carTransmittion: string = '';
  @Input() carStorage: string = '';
  @Input() carAge: number = 0;
  @Input() price: number = 0;
  @Input() showBox: boolean = false;
}
