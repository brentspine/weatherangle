import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBackgroundComponent } from './main-background.component';

describe('MainBackgroundComponent', () => {
  let component: MainBackgroundComponent;
  let fixture: ComponentFixture<MainBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
