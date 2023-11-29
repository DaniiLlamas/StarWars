import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPagePage } from './listado-page.page';

describe('ListadoPagePage', () => {
  let component: ListadoPagePage;
  let fixture: ComponentFixture<ListadoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
