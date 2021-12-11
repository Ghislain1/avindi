import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontinardDetailComponent } from './tontinard-detail.component';

describe('TontinardDetailComponent', () => {
  let component: TontinardDetailComponent;
  let fixture: ComponentFixture<TontinardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TontinardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TontinardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
