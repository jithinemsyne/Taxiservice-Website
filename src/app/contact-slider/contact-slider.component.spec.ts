import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSliderComponent } from './contact-slider.component';

describe('ContactSliderComponent', () => {
  let component: ContactSliderComponent;
  let fixture: ComponentFixture<ContactSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
