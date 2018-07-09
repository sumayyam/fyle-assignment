import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangaloreBranchesSearchComponent } from './bangalore-branches-search.component';

describe('BangaloreBranchesSearchComponent', () => {
  let component: BangaloreBranchesSearchComponent;
  let fixture: ComponentFixture<BangaloreBranchesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangaloreBranchesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangaloreBranchesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
