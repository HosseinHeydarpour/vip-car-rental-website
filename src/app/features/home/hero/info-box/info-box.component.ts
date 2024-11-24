import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss',
})
export class InfoBoxComponent {
  @Input() key: string;
  @Input() value: string;
  @Input() icon: string;
}
