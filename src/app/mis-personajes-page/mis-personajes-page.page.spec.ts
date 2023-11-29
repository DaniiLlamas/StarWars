import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPersonajesPagePage } from './mis-personajes-page.page';

describe('MisPersonajesPagePage', () => {
  let component: MisPersonajesPagePage;
  let fixture: ComponentFixture<MisPersonajesPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisPersonajesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
