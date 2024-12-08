import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('date', {
    static: false,
  })
  date: ElementRef;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.calculateDate();
  }

  calculateDate() {
    const year = new Date().getFullYear();
    this.date.nativeElement.textContent = year;
    console.log(this.date.nativeElement.textContent);
  }
}
