import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosCitaComponent } from './requisitos-cita.component';

describe('RequisitosCitaComponent', () => {
  let component: RequisitosCitaComponent;
  let fixture: ComponentFixture<RequisitosCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisitosCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequisitosCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
