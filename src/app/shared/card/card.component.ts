import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() imageURL: string = null;
  @Input() hasFade: boolean = false;
  @Input() title: string = null;
  @Input() iconName: string = null;
  @Input() counter: string = null;
  @Input() hoverEffect: boolean = false;
  @Input() titlePosition: string;
  @Input() desc: string = null;
}
