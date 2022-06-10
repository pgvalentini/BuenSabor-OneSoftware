import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroInsumoAdminComponent } from './rubro-insumo-admin.component';

describe('RubroInsumoAdminComponent', () => {
  let component: RubroInsumoAdminComponent;
  let fixture: ComponentFixture<RubroInsumoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubroInsumoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroInsumoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
