import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RomancePage } from './romance.page';

describe('RomancePage', () => {
  let component: RomancePage;
  let fixture: ComponentFixture<RomancePage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(RomancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
