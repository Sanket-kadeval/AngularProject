import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalserviceComponent } from './electricalservice.component';

describe('ElectricalserviceComponent', () => {
  let component: ElectricalserviceComponent;
  let fixture: ComponentFixture<ElectricalserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricalserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
