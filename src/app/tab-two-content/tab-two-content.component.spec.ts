import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTwoContentComponent } from './tab-two-content.component';

describe('TabTwoContentComponent', () => {
  let component: TabTwoContentComponent;
  let fixture: ComponentFixture<TabTwoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTwoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTwoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
