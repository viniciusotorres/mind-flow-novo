import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMindComponent } from './formulario-mind.component';

describe('FormularioMindComponent', () => {
  let component: FormularioMindComponent;
  let fixture: ComponentFixture<FormularioMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
