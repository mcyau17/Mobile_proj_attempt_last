import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorrorPage } from './horror.page';

describe('HorrorPage', () => {
  let component: HorrorPage;
  let fixture: ComponentFixture<HorrorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
