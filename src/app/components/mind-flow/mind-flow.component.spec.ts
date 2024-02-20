import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindFlowComponent } from './mind-flow.component';

describe('MindFlowComponent', () => {
  let component: MindFlowComponent;
  let fixture: ComponentFixture<MindFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
