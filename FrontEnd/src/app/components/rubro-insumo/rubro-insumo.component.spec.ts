import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroInsumoComponent } from './rubro-insumo.component';

describe('RubroInsumoComponent', () => {
  let component: RubroInsumoComponent;
  let fixture: ComponentFixture<RubroInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubroInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
