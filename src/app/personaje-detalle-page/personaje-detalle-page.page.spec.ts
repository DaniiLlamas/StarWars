import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeDetallePagePage } from './personaje-detalle-page.page';

describe('PersonajeDetallePagePage', () => {
  let component: PersonajeDetallePagePage;
  let fixture: ComponentFixture<PersonajeDetallePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonajeDetallePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
