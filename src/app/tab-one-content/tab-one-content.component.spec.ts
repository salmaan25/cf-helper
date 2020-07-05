import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOneContentComponent } from './tab-one-content.component';

describe('TabOneContentComponent', () => {
  let component: TabOneContentComponent;
  let fixture: ComponentFixture<TabOneContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOneContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
