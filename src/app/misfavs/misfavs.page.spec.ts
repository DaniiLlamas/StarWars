import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MisfavsPage } from './misfavs.page';

describe('MisfavsPage', () => {
  let component: MisfavsPage;
  let fixture: ComponentFixture<MisfavsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisfavsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
