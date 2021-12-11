import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontinardListComponent } from './tontinard-list.component';

describe('TontinardListComponent', () => {
  let component: TontinardListComponent;
  let fixture: ComponentFixture<TontinardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TontinardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TontinardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
