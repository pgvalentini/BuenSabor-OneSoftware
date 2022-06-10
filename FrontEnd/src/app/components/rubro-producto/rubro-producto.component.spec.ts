import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroProductoComponent } from './rubro-producto.component';

describe('RubroProductoComponent', () => {
  let component: RubroProductoComponent;
  let fixture: ComponentFixture<RubroProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubroProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
