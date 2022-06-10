import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroProductoAdminComponent } from './rubro-producto-admin.component';

describe('RubroProductoAdminComponent', () => {
  let component: RubroProductoAdminComponent;
  let fixture: ComponentFixture<RubroProductoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubroProductoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroProductoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
