import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.scss',
})
export class PrimaryBtnComponent {
  @Input() buttonLink;
  @Input() buttonText;
  @Input() hasArrow;
}
