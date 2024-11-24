import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-btn',
  templateUrl: './secondary-btn.component.html',
  styleUrl: './secondary-btn.component.scss',
})
export class SecondaryBtnComponent {
  @Input() buttonLink;
  @Input() buttonText;
  @Input() hasArrow;
}
