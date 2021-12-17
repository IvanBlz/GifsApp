import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGifsComponent } from './search-gifs.component';

describe('SearchGifsComponent', () => {
  let component: SearchGifsComponent;
  let fixture: ComponentFixture<SearchGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
