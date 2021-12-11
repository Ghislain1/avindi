import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTontinardsComponent } from './manage-tontinards.component';

describe('ManageTontinardsComponent', () => {
  let component: ManageTontinardsComponent;
  let fixture: ComponentFixture<ManageTontinardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTontinardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTontinardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
