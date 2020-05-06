import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCommonComponent } from './store-common.component';

describe('StoreCommonComponent', () => {
  let component: StoreCommonComponent;
  let fixture: ComponentFixture<StoreCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
