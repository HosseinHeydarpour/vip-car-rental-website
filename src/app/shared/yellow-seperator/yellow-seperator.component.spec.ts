import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowSeperatorComponent } from './yellow-seperator.component';

describe('YellowSeperatorComponent', () => {
  let component: YellowSeperatorComponent;
  let fixture: ComponentFixture<YellowSeperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YellowSeperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
