import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbingserviceComponent } from './plumbingservice.component';

describe('PlumbingserviceComponent', () => {
  let component: PlumbingserviceComponent;
  let fixture: ComponentFixture<PlumbingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumbingserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumbingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
