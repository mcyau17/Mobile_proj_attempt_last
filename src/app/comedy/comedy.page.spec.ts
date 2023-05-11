import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComedyPage } from './comedy.page';

describe('ComedyPage', () => {
  let component: ComedyPage;
  let fixture: ComponentFixture<ComedyPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ComedyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
