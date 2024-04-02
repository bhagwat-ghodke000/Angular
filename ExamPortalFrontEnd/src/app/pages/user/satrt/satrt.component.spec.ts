import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatrtComponent } from './satrt.component';

describe('SatrtComponent', () => {
  let component: SatrtComponent;
  let fixture: ComponentFixture<SatrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatrtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SatrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
