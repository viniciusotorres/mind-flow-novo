import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindExtendidoComponent } from './mind-extendido.component';

describe('MindExtendidoComponent', () => {
  let component: MindExtendidoComponent;
  let fixture: ComponentFixture<MindExtendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindExtendidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindExtendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
