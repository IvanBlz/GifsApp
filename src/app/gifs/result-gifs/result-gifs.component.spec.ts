import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGifsComponent } from './result-gifs.component';

describe('ResultGifsComponent', () => {
  let component: ResultGifsComponent;
  let fixture: ComponentFixture<ResultGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
